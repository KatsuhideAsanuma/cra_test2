import { Suspense, useEffect, useRef, useState } from "react";
import Card from './Card';
import './App.css';

function Container(){
    const container=useRef(null)
    const [parentBoundary,setParentBoundary]=useState([])
    const prevState=useRef(null)
    useEffect(()=>{
        console.log("parentBoundary : ",parentBoundary)
        const boundary=container.current.getBoundingClientRect()
        console.log(JSON.stringify(boundary))
        if (JSON.stringify(boundary) !==JSON.stringify(prevState.current)){
            console.log("setParentBoundary")
            setParentBoundary([boundary.top,boundary.right,boundary.bottom,boundary.left])
            prevState.current=boundary
        }
        
        

    })
    return (
        <div ref={container} className="container" >
            {console.log("container rendering")}
            <Suspense>
                {console.log("Suspense rendering",parentBoundary)}
                <Card position={parentBoundary} />
            </Suspense>
        </div>

    )
}

export default Container;

//{"x":0,"y":155.59375,"width":972,"height":43,"top":155.59375,"right":972,"bottom":198.59375,"left":0}