# Work Day Scheduler

I created a work day scheduler using Moment.js and Jquery. The scheduler allows you to enter your goals for the hour and save the information in local storage so that they will be saved when you return. The color of each hour changes depending on the current time of day so that you can have a better understanding our your goals.

## Code Snippet of Color Changer
```function colorChange(){
 for(var i = 0; i < formBox.length; i++){   
  if($(formBox[i]).attr("id") > hour) {
      $(formBox[i]).addClass("future");
  }
  else if ($(formBox[i]).attr("id") < hour) {
      $(formBox[i]).addClass("past");
  }
  else ($(formBox[i]).addClass("present"));
  console.log(hour)
}
 }
colorChange();
})

  ```

## Screenshot
![Screenshot](assets/top.PNG "Top of Scheduler")
![Screenshot](assets/bottom.PNG "Bottom of Scheduler")


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JQuery](https://jquery.com/)
* [Moment.js](https://momentjs.com/)

## Deployed Link

* [See Live Site](https://perfectoment.github.io/work-day-scheduler/)


## Author

* **Ryan Nemec** 

- [Link to Portfolio Site](https://perfectoment.github.io/Ryan-Portfolio/)
- [Link to Github](https://github.com/perfectoment)
- [Link to LinkedIn](https://www.linkedin.com/in/ryan-nemec-5a6b3a66/)


## License

This project is licensed under the MIT License 
