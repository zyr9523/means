import React from 'react';
class Table extends React.Component{
    render(){
        let {data} = this.props;
        // console.log(data)
        return (
            <div className="wrap">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>content</td>
                            <td>age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.content}</td>
                                        <td>{item.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;