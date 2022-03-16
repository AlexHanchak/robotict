import React, {useState} from 'react';

export const Robo = () => {
    let [outputArray] = useState([]);
    let output;
    const search = () => {
        console.log('start')
        let r = 100;
        for (let i = 1; i <= r; i++) {
            if (i) {
                if (i % 3 === 0 || i % 5 === 0) {
                    outputArray.push('RobotICT')
                }
                if (i % 3 === 0) {
                    outputArray.push('Robot')
                }
                if (i % 5 === 0) {
                    outputArray.push('ICT')
                }
                else {
                    outputArray.push(i)
                }
            }
        }
    }
    search();
    return (
        <div>
            <ol>
                {outputArray.map(item => (
                    <li>{item}</li>
                ))}
            </ol>
        </div>
)}
