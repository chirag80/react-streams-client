import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

    streamCreateOnSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
           <div>
               <h3>Create a Stream</h3>
               <StreamForm streamFormOnSubmit={this.streamCreateOnSubmit}/>
           </div>
        )
    }
}


export default connect(null, { createStream })(StreamCreate)