import React from "react";

class Studentclass extends React.Component{
    render(){
        return(
          <table border="1">
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
              </tr>
              {
                  this.props.date.map((value, index)=>{
                      return(
                          <tr>
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.status}</td>
                          </tr>
                      )
                  })
              }
          </table>
        )
    }
}
export default Studentclass;