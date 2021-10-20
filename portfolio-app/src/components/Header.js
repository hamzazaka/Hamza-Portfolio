import React from 'react';
import Typical from 'react-typical'

export default function Header() {

    return (
         <div className="contain heading1 ">
        <div className="row">
            <div className="col-md-8 mx-auto hh">
                <h1>Brand-Led Business Building™</h1>
                <h1>makes big happen for your</h1>
                {/* <!-- <h1 className="lasth">company</h1> --> */}
                <div className='lasth'>
                    <p> {' '}
      <Typical
      loop={Infinity}
      wrapper ='b'
      steps={[
          'Deveopler _',
          1000,
          'hello world  _',
          1000,
          'open source _',
          1000,

      ]}/>
      </p>
    </div>
                <a className="btn btn-danger " href="">The BLBB Effect</a>
            </div>
        </div>
    </div>
    // <div>
    //   <Typical
    //   loop={Infinity}
    //   wrapper ='b'
    //   steps={[
    //       'Deveopler ',
    //       1000,
    //       'hello world ',
    //       1000,
    //       'open source ',
    //       1000,

    //   ]}/>
    // </div>

    )
}
