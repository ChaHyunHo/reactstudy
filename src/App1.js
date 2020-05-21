import React, { Component } from 'react';

class App1 extends Component {
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
    const list = boards.map(function(row) {
      return row.bno + row.writer ;
    });
    // return 이전이 자바스크립트
    return (
          <div>
              {list}
          </div>
    );
  }
}

export default App1;
