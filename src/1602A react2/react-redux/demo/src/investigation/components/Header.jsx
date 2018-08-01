import React, { Component } from 'react';
import '../scss/style.css';
import {withRouter} from 'react-router-dom';
class Header extends Component {
  render() {
    let name = '小仙测评';
    let tit = '';
    let pathname = this.props.location.pathname;
    if(pathname === '/Sex'||'/Historys'||'/Allergy'||'/Dislike'){
        name = '基本信息'
    }
    if(pathname === '/Sex'){
        tit = '请选择您的性别'
    }else if(pathname === '/Historys'){
        tit = '有无病史'
    }else if(pathname === '/Allergy'){
        tit = '有无过敏食物'
    }
    else if(pathname === '/Dislike'){
        tit = '不喜欢吃的食物'
    }else if(pathname === '/Fell'){
        name = '您感觉？'
    }else if(pathname === '/Constitution'){
        name = '和平质'
    }
    console.log(pathname)
    return (
        <div className="message">
            <header>
                {pathname !== '/Constitution'?<a href="##" onClick={this.back.bind(this)}>{'<'}</a>:<a></a>}
                <h3>{name}</h3>
                <a href="##">&nbsp;&nbsp;&nbsp;</a>
            </header>
            {
                tit&&<div className="tit">
                        <h3>{tit}</h3>
                    </div>
            }
        </div>
        
    )
  }
  back(){
      if(this.props.location.pathname === '/Start'){
        this.props.history.push('/Start')
      }
      this.props.history.goBack()
  }
}
export default withRouter(Header);
 