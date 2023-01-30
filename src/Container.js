import { Suspense, useEffect, useRef } from "react";
import Card from './Card';
import './App.css';

function Container(props){
    const container=useRef(null)
    useEffect(()=>{
        console.log(JSON.stringify(container.current.getBoundingClientRect()))

    })
    return (
        <div ref={container} height={100} width={200}>
            <Suspense>
                <Card/>
            </Suspense>
        </div>

    )
}

export default Container;

//{"x":0,"y":155.59375,"width":972,"height":43,"top":155.59375,"right":972,"bottom":198.59375,"left":0}