import React, { Component } from "react";
//import { thisExpression } from "@babel/types";

export default class ListView extends Component {

   
    createList = () => {
        let table = []

        //table.push(<tr><thead><th>Name</th><th>Position</th></thead></tr>)
    
        // Outer loop to create parent
        for (let i = 0; i < this.props.name.length; i++) {
          let children = []
          //Inner loop to create children
          //for (let j = 0; j < 5; j++) {
            children.push(<td>{this.props.name[i]}&nbsp;&nbsp;</td>)

            children.push(<td>{this.props.description[i]}</td>)
          //}
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }
    render() {
        return (
           
            <div>
                <h3>Listview Page</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Postion</th>
                        </tr>     
                    </thead>
                    <tbody>
                        {this.createList()}
                    </tbody>           
                </table>
            </div>
         
        );
    }
}