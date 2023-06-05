import React, { useEffect } from 'react';
import { createWindow } from '../Content/modules/closeWindow';
class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    /** 
    this.state = {
      config: {
        note: {
          url: 'https://www.amplenote.com/notes',
          height: 500,
          width: 580,
          left: 1280,
          top: 15
        },
        task: {
          url: 'https://todoist.com/app/project/2149072136',
          height: 500,
          width: 580,
          left: 790,
          top: 15
        },
        chat: {
          url: 'https://chat.openai.com/',
          height: 800,
          width: 400,
          left: 0,
          top: 615
        },
        calendar: {
          url: 'https://calendar.google.com/calendar/u/0/r',
          height: 800,
          width: 580,
          left: 0,
          top: 15
        }
      }
    };
    */
  }

  componentDidMount() {
    // Retrieve the configuration from storage
    chrome.storage.sync.get('config', ({ config }) => {
      if (config) {
        this.setState({ config });
      }
    });
  }

  handleInputChange(event) {
    const { name, value, type } = event.target;
    const [url, property] = name.split('.');
    const numericValue = type === 'number' ? parseFloat(value) : value;

    this.setState((prevState) => ({
      config: {
        ...prevState.config,
        [url]: {
          ...prevState.config[url],
          [property]: numericValue
        }
      }
    }));
  }

  handleSaveConfig() {
    // Save the updated configuration to storage
    chrome.storage.sync.set({ config: this.state.config }, () => {
      console.log('Configuration saved');
    });
  }

  render() {
    const { config } = this.state;

    return (
      <div>
        <h1>Extension Options</h1>

        {Object.keys(config).map((url) => (
          <div key={url}>
            <h2>{url.charAt(0).toUpperCase() + url.slice(1)}</h2>

            <label htmlFor={`${url}.url`}>URL:</label>
            <input
              type="text"
              id={`${url}.url`}
              name={`${url}.url`}
              value={config[url].url}
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor={`${url}.height`}>Height:</label>
            <input
              type="number"
              id={`${url}.height`}
              name={`${url}.height`}
              value={config[url].height}
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor={`${url}.width`}>Width:</label>
            <input
              type="number"
              id={`${url}.width`}
              name={`${url}.width`}
              value={config[url].width}
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor={`${url}.left`}>Left:</label>
            <input
              type="number"
              id={`${url}.left`}
              name={`${url}.left`}
              value={config[url].left}
              onChange={this.handleInputChange.bind(this)}
            />

            <label htmlFor={`${url}.top`}>Top:</label>
            <input
              type="number"
              id={`${url}.top`}
              name={`${url}.top`}
              value={config[url].top}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
        ))}

        <button onClick={this.handleSaveConfig.bind(this)}>Save</button>
      </div>
    );
  }
}

export default OptionsComponent;
