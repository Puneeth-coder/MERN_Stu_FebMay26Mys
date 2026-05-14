//Error boundary & file upload progress
//Error boundary:its a special class component that catches 
//rending errors in its child components tree and shows a fallback UI
//Error bondaries does not catch:
    // error inside event handler
    //error inside setTimeout/setInterval
    //error inside async code etc
    //It is used only for "redering and lifecycle methods errors".

import React,{ Component, useEffect, useState,useRef} from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorMessage:"",
        };
    }


    //LifeCycle method updates the state whne child throws a error during rendering
    static getDerivedStateFromError(error) {
        return {
            hasError: false,
            errorMessage :error.message || "Something went wrong",
        };
    }

    ComponentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBody:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (
                <section>
                    <h2>Something Went Wrong</h2>
                    <p>{this.state.errorMessage}</p>
                </section>
            )
        }
        return this.props.children;
    }
}

function UploadComponent() {
    const [progress,setProgress]=useState(0);
    const [isLoading,setIsLoading]=useState(false);
    const[IsUploading,setIsUploading]=useState(false);

    const intervalRef =useRef(null);

    useEffect(()=>{
        return()=>{
            clearInterval(intervalRef.current);
        };
    },[]);

    function StartUpload() {
        if(isLoading){  //If upload is already running ,then do nothing
            return;
        }
        setProgress(0);
        setIsLoading(true);

        intervalRef.current=setInterval(()=>{
            setProgress((prevProgress)=>{
                const nextProgress=prevProgress+10;

                if(nextProgress >=100){
                    clearInterval(intervalRef.current);
                    setIsLoading(false);
                    return 100;
                }
                return nextProgress;
            });
        },300);
    }
    function resetUpload() {
        clearInterval(intervalRef.current);
        setProgress(0);
        setIsUploading(false);
    }
    return(
        <section>
            <h2>File upload & error boundaries</h2>
            <button onClick={StartUpload} 
            disabled={IsUploading}>{IsUploading?"Uploading...":"Upload File"}</button>
            <button onClick={resetUpload} 
            disabled={IsUploading && progress===0}>Reset</button>
            <progress value={progress} max="100"></progress>
            <p>{progress}%</p>
            {progress===100 && <p>upload Complete.</p>}
        </section>
    );
}
export function UploadErrorBoundary() {
    return(
        <ErrorBoundary>
            <UploadComponent/>
        </ErrorBoundary>
    );
}