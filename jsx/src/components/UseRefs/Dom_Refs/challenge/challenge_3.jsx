import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';    //This (flushSync) is used to update/Render immediately before it scroll

export default function CatFriends() {
    const [index, setIndex] = useState(0);   //Adding useState to store the index of the current cat
    const selectedRef = useRef(null)       //Adding ref to the cat element    

    function horizontalScroll() {         //Adding a function to scroll to the selected cat
        selectedRef.current?.scrollIntoView({      //Using ? to check if the ref is null or not
            behavior: 'smooth',             //Specifying the behavior of the scroll
            block: 'nearest',             //Specifying the block of the scroll
            inline: 'center'              //Specifying the inline of the scroll
        })
    }

    return (
        <>
            <nav>
                <button onClick={() => {
                    const nextIndex = index < catList.length - 1 ? index + 1 : 0  //This is a shorthand if else statement if index(0) < Length(9) true then the index = 1 will run if false goes back to index(0)
                    flushSync(() => {    // This is to update the index state immediately so that the ref is updated
                        setIndex(nextIndex)  //setting the next index
                    })
                    horizontalScroll()      //calling the horizontalScroll function
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (    //Mapping through the catList array
                        <li key={cat.id}>
                            <img
                                className={index === i ? 'active' : ''}   //Applying class to the selected cat
                                ref={index === i ? selectedRef : null}  //Assigning ref to the selected cat if the index is equal to the current cat
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catCount = 10;
const catList = new Array(catCount);    //creating an array of cats 
for (let i = 0; i < catCount; i++) {        //Looping through the catList array 0-9
    const bucket = Math.floor(Math.random() * catCount) % 2;  //Adding random values to the bucket 0,1,2
    let imageUrl = '';
    switch (bucket) {                        //Switching the bucket value to get different images
        case 0: {
            imageUrl = "https://placecats.com/neo/250/200";     //Setting the image url for the bucket 0
            break;
        }
        case 1: {
            imageUrl = "https://placecats.com/millie/250/200";
            break;
        }
        case 2:
        default: {
            imageUrl = "https://placecats.com/bella/250/200";
            break;
        }
    }
    catList[i] = {
        id: i,
        imageUrl,
    };
}

