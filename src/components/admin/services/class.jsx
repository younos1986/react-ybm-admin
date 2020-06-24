import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import React, { Component } from "react";
import { deletePost, getPosts, savePost, updatePost } from "../../../services/userService";

import axios from "axios";
import cellWithEditing from '../../common/cellWithEditing';
import { toast } from "react-toastify";

class ClassPage extends Component {
  
    pageChange = (event) => {
        
    }
 

    log()
    {

    }

   handleAdd = async () => {

    let pc = new RTCPeerConnection({
        iceServers: [
          {
            urls: 'stun:stun.l.google.com:19302'
          }
        ]
      })
      //pc.oniceconnectionstatechange = e => log(pc.iceConnectionState)
      pc.oniceconnectionstatechange = e => { console.log(pc.iceConnectionState)}
      pc.onicecandidate = event => {
        if (event.candidate === null) {
          document.getElementById('localSessionDescription').value = btoa(JSON.stringify(pc.localDescription))
        }
      }

      debugger;
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
          console.log(stream)

          let v = document.getElementById('video1');
          console.log(v);
        pc.addStream(v.srcObject = stream)
        pc.createOffer()
          .then(d => pc.setLocalDescription(d))
          .catch(log => { console.log(log) })
      }).catch(log => { console.log(log) })


    //   window.startSession = () => {
    //     let sd = document.getElementById('remoteSessionDescription').value
    //     if (sd === '') {
    //       return alert('Session Description must not be empty')
    //     }
    
    //     try {
    //       pc.setRemoteDescription(new RTCSessionDescription(JSON.parse(atob(sd))))
    //     } catch (e) {
    //       alert(e)
    //     }
    //  }
    
 //let btns = document.getElementsByClassName('createSessionButton')
      //for (let i = 0; i < btns.length; i++) {
      //  btns[i].style = 'display: none'
      //}
    
      //document.getElementById('signalingContainer').style = 'display: block'




  };



  render() {
    return (
      <React.Fragment>



<div id="signalingContainer" >
  Browser base64 Session Description<br />
  <textarea id="localSessionDescription" ></textarea> <br />
  
  Golang base64 Session Description<br />
  <textarea id="remoteSessionDescription"></textarea> <br/>

</div>

<br />

Video<br />
<video id="video1" style={{ height:'200px', width: '200px', border: '1px solid red' }}></video> <br />



<button title="Add new" className="btn btn-default" onClick={this.handleAdd}>  Add new </button>



        
      </React.Fragment>
    );
  }
}

export default ClassPage;