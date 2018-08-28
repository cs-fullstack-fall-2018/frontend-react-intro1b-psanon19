import React, {Component} from "react";




class StudentList extends Component {

    render() {




        var forEachAccount = this.props.schoolInfo.map(
            eachItemTest => {

                // function letterGrade() {
                    var gradeNum= eachItemTest.grade;
                    var gradeAnswer = "";
                    if (gradeNum>=101)
                    {
                        gradeAnswer="Letter Grade: Error";
                    }
                    else if (gradeNum>=90)
                    {
                        gradeAnswer = "Letter Grade: You earned an A!!";
                    }
                    else if (gradeNum>=80)
                    {
                        gradeAnswer ="Letter Grade: You earned an B!";
                    }
                    else if (gradeNum>=70)
                    {
                        gradeAnswer ="Letter Grade: You earned an C";
                    }
                    else if (gradeNum>=60)
                    {
                        gradeAnswer ="Letter Grade: You earned an D.";
                    }
                    else if (gradeNum>=0)
                    {
                        gradeAnswer ="Letter Grade: You earned an F...";
                    }
                    else
                    {
                        gradeAnswer ="Letter Grade: Error";
                    }
                //}


                return(
                <div className="GradeArray">
                    <h4> Students: {eachItemTest.firstName}</h4>
                    <h4> Grade: {eachItemTest.grade}</h4>
                    <h4 id="LetterGrade"> {gradeAnswer}</h4>
                </div>
                    );

            }
        );

        return <div className="StudentList">
            <h1>Studens: {this.props.schoolInfo[0].firstName}</h1>
            <h1>Grade: {this.props.schoolInfo[0].grade}</h1>
            <h3>{forEachAccount}</h3>

        </div>
    }
}


function letterGrade() {



}
export default StudentList;