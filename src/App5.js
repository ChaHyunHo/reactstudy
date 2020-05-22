import React, { Component } from 'react';

class App5 extends Component {
    state = {     // 이 변수는 게시판 데이터를 배열로 가지는 boards 배열을 구성원으로 가진다.
        maxNo: 3,
        boards : [
          {
            bno : 1,
            writer : 'Cha Hyun Ho',
            title  : 'hyun ho title',
            date   : new Date()
          },
          {
            bno : 2,
            writer : 'Suck so',
            title  : 'Hi Hello ',
            date   : new Date()
          }        
        ]
    }

    handleSaveData = (data) => {
      let boards = this.state.boards;
      if (data.bno ===null || data.bno==='' || data.bno===undefined) {    // new : Insert
        this.setState({
          boards: boards.concat({
            maxNo: this.state.maxNo + 1, 
            bno: this.state.maxNo++, date: new Date(), ...data }) 
          });
      } else {
        this.setState({
          boards : boards.map(row => data.bno === row.bno ? {...data}: row)
        })
      }
    }
    
    handleDeleteData = (bno) => {
      this.setState({
        boards: this.state.boards.filter(row => row.bno !== bno)
      })
    }

    handleSelectRow = (row) => {
      this.child.current.handleSelectRow(row);
    }


  render() { // React에서 render는 화면을 생성하기 위해 실행하는 이벤트이다.
    const {boards} = this.state;
    // return 이전이 자바스크립트
    return (
          <div>
            <BoardForm onSaveData = {this.handleSaveData}/>
            <table border="1">
                <tbody>
                  <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td> 
                    <td width="120">Name</td> 
                    <td width="120">Date</td>
                    <td width="20"></td>
                  </tr>
                  {
                    boards.map(row =>
                        (<BoardItem key={row.bno} row={row} onRemove={this.handleDeleteData} onSelectRow={this.handleSelectRow} />)
                    )
                  }
              </tbody>
             </table>
          </div>
    );
  }
}
/**
 * 컴포넌트 자신이 사용하는 것은 state이고, 부모로부터 받은 것은 props이다. 이 개념을 잘 이해하면
 * React의 주요 개념 절반을 이해한 것이다. BoardItem 컴포넌트를 사용하는 것은 React의 특징으로
 * React에서는 모든 기능을 컴포넌트로 구현하여 사용한다. 
 */
class BoardItem extends React.Component {
  handleDeleteData = () => {
    const {row, onRemove} = this.props;
    onRemove(row.bno);
  }

  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;
    onSelectRow(row);
  }    

  render() {
    return( 
      <tr>  
          <td>{this.props.row.bno}</td> 
          <td>{this.props.row.title}</td>
          <td>{this.props.row.writer}</td>
          <td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
          <td><button onClick={this.handleDeleteData}>X</button></td>
      </tr>
    );
  }
}

/**
 * 글쓰기 기능을 구현시 BoardForm 컴포넌트를 생성하고
 */
class BoardForm extends React.Component {
  state = {} // state는 BoardForm 내부에서 사용하는 state, state는 컴포넌트 내부에서 사용할 변수로 이름이 고정되어 있다.

  handleChange = (e) => {  // e는 자바스크립트의 change 이벤트에서 파라미터로 넘어오는 Event를 의미하고 
    this.setState({
      [e.target.name]: e.target.value // e.target은 현재 이벤트가 발생한 개체(값을 입력하는 입력상자를 의미한다.)
    })
  }

  // 부모로부터 받은 것은 값이든 함수이든 항상 props를 사용해야 한다.
  handleSubmit = (e) => {
    e.preventDefault(); // 실제로 서버로 값을 전송하지 않기때문에 이벤트를 중지.
    this.props.onSaveData(this.state); // onSaveData() 함수는 BoardForm 컴포넌트에 있지 않고 부모인 App 컴포넌트에 있기 때문에 this.prop를 사용, handleChange에서 입력된 값을 다시 this.state로 가져옴
    this.setState({});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" onChange={this.handleChange}/>
        <input placeholder="name" name="writer" onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    );
  }
} 
export default App5;
