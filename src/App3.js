import React, { Component } from 'react';

class App3 extends Component {
  state = {     // 이 변수는 게시판 데이터를 배열로 가지는 boards 배열을 구성원으로 가진다.
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

  render() { // React에서 render는 화면을 생성하기 위해 실행하는 이벤트이다.
    const {boards} = this.state;
    // return 이전이 자바스크립트
    return (
          <div>
             <table border="1">
                <tbody>
                  <tr align="center">
                    <td width="50">No.</td>
                    <td width="300">Title</td> 
                    <td width="120">Name</td> 
                    <td width="120">Date</td>
                  </tr>
                  {
                    boards.map(row =>
                        (<BoardItem key={row.bno} row={row}/>)
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
  render() {
    return( 
      <tr>  
          <td>{this.props.row.bno}</td> 
          <td>{this.props.row.title}</td>
          <td>{this.props.row.writer}</td>
          <td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
      </tr>
    );
  }
}

export default App3;
