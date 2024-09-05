// WordLetterCounter.js 
import React, { useState } from "react"; 
import "./wordLetterCounter.css"; 

function WordLetterCounter() { 
	const [text, setText] = 
		useState(""); 
	const wordCount = text 
		.split(/\s+/) 
		.filter(Boolean).length; 
	const letterCount = text.length; 

	const handleTextChange = (e) => { 
		setText(e.target.value); 
	}; 

	return ( 
		<div> 
			<textarea 
				placeholder= 
				"Type your text here..."
				onChange={ 
					handleTextChange 
				} 
				value={text} 
				rows={5} 
				cols={50} 
			/> 
			 

             <button> 
				Letter Count :{" "} </button> &nbsp; &nbsp;
				{letterCount} 
                <br/>
                <br/>
				<button>Word Count :</button>&nbsp; &nbsp;
				{wordCount} 
			
			
		</div> 
	); 
} 

export default WordLetterCounter;
