import React, { Component } from 'react';
import Identicon from 'identicon.js';

export default class Main extends Component {
  render() {
    return (
      <div className='container-fluid mt-5'>
        <div className='row'>
          <main role='main' className='col-lg-12 d-flex text-center'>
            <div className='content mr-auto ml-auto'>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const content = this.postContent.value;
                  this.props.createPost(content);
                }}
              >
                <div className='form-group mr-sm-2'>
                  <input
                    id='postContent'
                    type='text'
                    ref={(input) => {
                      this.postContent = input;
                    }}
                    className='form-control'
                    placeholder="What's on your mind?"
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary btn-block mb-4'
                >
                  Share
                </button>
              </form>
              {this.props.posts.map((post, key) => {
                return (
                  <div className='card mb-4' key={key}>
                    <div className='card-header'>
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        alt='profile'
                        src={`data:image/png;base64,${new Identicon(
                          post.author,
                          30
                        ).toString()}`}
                      />
                      <small className='text-muted'>{post.author}</small>
                    </div>
                    <ul id='postList' className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <p className='lead'>{post.content}</p>
                      </li>
                      <li key={key} className='list-group-item py-2'>
                        <p className='float-left mt-2 mb-0 text-muted'>
                          TIPS:{' '}
                          {window.web3.utils.fromWei(
                            post.tipAmount.toString(),
                            'Ether'
                          )}{' '}
                          ETH
                        </p>
                        <button className='float-right btn btn-secondary'>
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}
