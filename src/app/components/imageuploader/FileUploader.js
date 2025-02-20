"use client";
import React, { useState } from "react";
import {  IKUpload } from "imagekitio-next";
import {Loader2} from "lucide-react"



export default function FileUpload({
    onSucces,
    onProgress,
    fileType  ="image",
}) {
  const [uploading,setUploading] = useState(false)
  const [error, setError] = useState(null)
  const onError = (err ) => {
    console.log("Error", err);
    setError(err.message)
    setUploading(false)
  };
  
  const handleSuccess = (res) => {
    console.log("Success", res);
    setUploading(false)
    setError(null)
    onSucces(res)
  };
  
  const handleProgress = (evt) => {
    if(evt.lengthComputable && onProgress){
        const percentComplete = (evt.loaded /evt.total * 100);
        onProgress(Math.round(percentComplete));
    }
  };
  
  const handleStartUpload = () => {
    setUploading(true)
    setError(null)
  };
  
  const validateFile = (file)=>{
    const f = file
    if(fileType === "video"){
        if(!file.type.startsWith("video/")){
            setError("Please Upload the video")
            return false
        }
    }
    if(file.size>50*1024*1024){
        setError("Video Must be under 50 MB")
        return false
    }
    else{
        const validTypes = ["image/jpeg","image/png","image/webp"]
        if(!validTypes.includes(f.type)){
            setError(`Please Upload Valid Type "image/jpeg","image/png","image/webp"`)
            return false
        }
        if(file.size> 5*1024*1024){
            setError("Image Must be under 5 MB")
            return false
        }
    }
    return true
  }


  return (
    <div className="space-y-2">
        <IKUpload
          fileName={fileType === "video"? "video":"image"}
          useUniqueFileName={true}
          validateFile={validateFile}
          onError={onError}
          onSuccess={handleSuccess}
          onUploadProgress={handleProgress}
          onUploadStart={handleStartUpload}
          folder={fileType === "video"?"video":"image"}
          className="file-input file-input-bordered w-full"
        />
       {
        uploading && (
            <div className=" flex items-center gap-2 text-sm text-primary">
                <Loader2 className="animate-spin"/>
                <span>Uploading...</span>
            </div>
        )
        
       }
       {
        error &&(
            <div className="text-error text-sm">
                {error}
            </div>
        )
       }
    </div>
  );
}