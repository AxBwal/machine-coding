import { useState } from "react"
import "./Progress.css"

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const totalProgress = 100;

    function getcolor(progress) {
        if (progress < 40) {
            return 'red'
        }
        else if (progress < 80) {
            return 'orange'
        }
        else {
            return 'green'
        }
    }

    function increhandler(){
        if(progress >=100){
            return;
        }
        setProgress(progress+10)
    }
    function decrehandler(){
        if(progress <=0){
            return;
        }
        setProgress(progress-10)
    }
    return (
        <div>
            <h2>ProgressBar</h2>

            <div className="Outer-class">
                <div style={{
                    display: "flex",
                    height: 100,
                    justifyContent: "center",
                    alignItems:'center',
                    width:`${progress}%`,
                    backgroundColor: getcolor(progress)
                }}>
                    {
                        `${(progress * 100) / totalProgress}%`
                    }
                </div>
            </div>

            <div className="button-10">
                <button onClick={increhandler}>Incre by 10%</button>
                <button onClick={decrehandler}>Decre by 10%</button>
            </div>
        </div>
    )
}

export default ProgressBar