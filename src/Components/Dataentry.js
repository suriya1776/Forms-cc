import React, {
  Component,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
} from 'react'

export default class Dataentry extends Component {
  state = {
    studendata: [
      {
        type: 'text',
        name: 'Firstname',
        classname: '',
      },
      {
        type: 'text',
        name: 'Secondname',
      },
    ],
    id: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  }

  render() {
    const { studendata, id } = this.state
    return (
      <div className='row'>
        <div className='col-12'>
          <h3>STUDENT DATA</h3>
        </div>
        <div>
          {studendata.map((value) => {
            return (
              <div>
                <label htmlFor={value.name}>{value.name}</label>
                <input type={value.type} id={value.name} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
