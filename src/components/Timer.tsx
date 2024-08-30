import {useState, useEffect} from 'react';

interface TimerProps {
    onTimeout: () => void;
}

 const Timer: React.FC<TimerProps> = ({onTimeout}) =>{
    const [time, setTime] = useState(15);

    useEffect(() => {
        if (time === 0){
            onTimeout(); //quando o tempo acabar
        } else {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        }
 }, [time, onTimeout]);

    return (
        <div className="flex items-center space-x-4">
            <span className="text-xl"> {`00:${time < 10 ? `0${time}` : time}`}</span>
        </div>
    );
 };
 export default Timer;