import React, {Component} from "react";




class StudentList extends Component {

    render() {

        var gradeNum= this.props.schoolInfo[0].grade;
        if (gradeNum>=101)
        {
            alert("Error")
        }
        else if (gradeNum>=90)
        {
            alert("You earned an A!!")
        }
        else if (gradeNum>=80)
        {
            alert("You earned an B!")
        }
        else if (gradeNum>=70)
        {
            alert("You earned an C")
        }
        else if (gradeNum>=60)
        {
            alert("You earned an D.")
        }
        else if (gradeNum>=0)
        {
            alert("You earned an F...")
        }
        else
        {
            alert("Error")
        }

        return <div className="StudentList">
            <h1>Studens: {this.props.schoolInfo[0].firstName}</h1>
            <h1>Grade: {this.props.schoolInfo[0].grade}</h1>


        </div>
    }
}


function letterGrade() {



}
export default StudentList;