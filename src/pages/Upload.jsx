import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase.js";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [inputs, setInputs] = useState(null);
  const [imgUrl, setImgUrl] = useState(undefined);
  const [imgUploadPerc, setImgUploadPerc] = useState(undefined);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoUploadPerc, setVideoUploadPerc] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };

    })
  };
  console.log("LINE AT 21", inputs);
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        urlType === "imgUrl"
          ? setImgUploadPerc(Math.round(progress))
          : setVideoUploadPerc(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        // switch (error.code) {
        //   case "storage/unauthorized":
        //     // User doesn't have permission to access the object
        //     break;
        //   case "storage/canceled":
        //     // User canceled the upload
        //     break;

        //   // ...

        //   case "storage/unknown":
        //     // Unknown error occurred, inspect error.serverResponse
        //     break;
        // }
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
          console.log("File available at", downloadURL);
        });
      }
    );
    console.log(imgUploadPerc, videoUploadPerc);
  };
  useEffect(() => {
    imgUrl && uploadFile(imgUrl, "imgUrl");
  }, [imgUrl]);
  useEffect(() => {
    videoUrl && uploadFile(videoUrl, "videoUrl");
  }, [videoUrl]);
  const navigate = useNavigate();
  const handleClick = async() => {
    const res = await axios.post("https://movies-media-api.onrender.com/api/movie/post" , inputs);
    console.log(res.data);
    navigate("/success");
  };
  return (
    <div className="relative">
      <Menu />
      <Dashboard />
      <div className="absolute inset-x-1/3 top-28 ">
        <div className="flex flex-col justify-between h-[600px] shadow-lg p-4">
          <p className="text-primary text-2xl font-bold">Upload a movie</p>
          <input
            type="text"
            placeholder="title.."
            className="p-2"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="genre.."
            className="p-2"
            name="genre"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="category.."
            className="p-2"
            name="category"
            onChange={handleChange}
          />
          <input
            type="text"
            className="p-2"
            placeholder="desc.."
            name="desc"
            onChange={handleChange}
          />
          <input
            type="number"
            min="0"
            max="10"
            placeholder="rating.."
            className="p-2"
            name="rating"
            onChange={handleChange}
          />
          {imgUrl && <>Thumbnail upload is {imgUploadPerc}% done</>}
          <label htmlFor="">Thumbnail..</label>
          <input
            type="file"
            placeholder="Name"
            accept="image/*"
            className=""
            onChange={(e) => setImgUrl(e.target.files[0])}
          />
          {videoUrl && <>Video upload is  {videoUploadPerc}% done</>}
          <label htmlFor="">Movie..</label>

          <input
            type="file"
            placeholder="Name"
            accept="video/*"
            className="registerInput"
            onChange={(e) => setVideoUrl(e.target.files[0])}
          />
          <button className=" bg-primary py-2 px-4 text-white font-semibold" onClick={handleClick}>
            Upload
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Upload;
