import _ from 'lodash';

const aColor = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
const oCustomColors = {
  app_primary: '', // primary color
  app_bg: '#ffffff', // background
  app_gray: '#cccccc', // gery
};
const aAcceptors = ['backgroundColor', 'color', 'borderColor'];
const aTitle = ['bg', 'font', 'border'];

function styleScript() {
  const style = {};
  for (let i = 0; i < aAcceptors.length; i += 1) {
    const title = aTitle[i];
    const aAcceptor = aAcceptors[i];
    const lev1 = {};
    // colors
    aColor.forEach((colorItem) => {
      const lev2 = {};
      lev2[aAcceptor] = colorItem;
      lev1[colorItem] = lev2;
    });

    // custom colors
    const keys = Object.keys(oCustomColors);
    _.each(keys, (key) => {
      const value = oCustomColors[key];
      const lev2 = {};
      lev2[aAcceptor] = value;
      lev1[key] = lev2;
    });
    style[title] = lev1;
  }
  return style;
}


const color = {

  // only used for IDE
  bg: {
    bg: {}, primary: {}, aqua: {}, black: {}, blue: {}, fuchsia: {}, gray: {}, green: {}, lime: {}, maroon: {}, navy: {}, olive: {}, orange: {}, purple: {}, red: {}, silver: {}, teal: {}, white: {}, yellow: {},
  },
  font: {
    bg: {}, primary: {}, aqua: {}, black: {}, blue: {}, fuchsia: {}, gray: {}, green: {}, lime: {}, maroon: {}, navy: {}, olive: {}, orange: {}, purple: {}, red: {}, silver: {}, teal: {}, white: {}, yellow: {},
  },
  border: {
    bg: {}, primary: {}, aqua: {}, black: {}, blue: {}, fuchsia: {}, gray: {}, green: {}, lime: {}, maroon: {}, navy: {}, olive: {}, orange: {}, purple: {}, red: {}, silver: {}, teal: {}, white: {}, yellow: {},
  },
  // end
  app: {
    theme: '#008CFF',
    standard: '#df394d',
    fontImp: '#333333',
    fontNormal: '#666666',
    fontAssist: '#999999',
    naviLine: '#e5e5e5',
    inputLine: '#cccccc',
    btnApricot: '#fff3f1',
    soundProgress: '#ffb9be',
    bg: '#f9f9f8',
    fontVIP: '#904829',
    inputBg: '#f2f2f2',
  },
  text: {
    link: '#DF5264',
    warning: '#008CFF',
  },
  component: {
    input: {
      backgroundColor: '#F3F3F3',
      borderColor: 'rgba(144,144,144,0.2)',
    },
    button: {
      backgroundColor: '#008CFF',
      color: '#FFF',
    },
    passcodeModal: {
      backgroundColor: '#080808',
      title: {
        color: '#FFF',
        alert: '#FC4349',
      },
      dot: {
        borderColor: '#008CFF',
      },
      dot2: {
        backgroundColor: '#008CFF',
      },
      button: {
        borderColor: '#9F9F9F',
      },
      cancel: {
        color: '#FFF',
      },
      char: {
        color: '#F3F3F3',
      },
      number: {
        color: '#F3F3F3',
      },
    },
    tags: {
      backgroundColor: '#0AB627',
      color: '#FFF',
    },
    iconList: {
      borderBottomColor: '#D5D5D5',
      title: {
        color: '#0B0B0B',
      },
      chevron: {
        color: '#D5D5D5',
      },
    },
    iconTwoTextList: {
      borderBottomColor: '#bbb',
      title: {
        color: '#0B0B0B',
      },
      text: {
        color: '#4A4A4A',
      },
    },
    selectionList: {
      color: '#2D2D2D',
    },
    dashLine: {
      backgroundColor: '#979797',
    },
    touchSensorModal: {
      color: '#000',
      backgroundColor: 'rgba(0,0,0,0.5)',
      panel: {
        backgroundColor: '#FFF',
      },
    },
    listItemIndicator: {
      color: '#9B9B9B',
    },
    navBackIndicator: {
      color: '#FFF',
    },
    swipableButtonList: {
      backText: {
        color: '#FFF',
      },
      rowFront: {
        backgroundColor: '#FFF',
      },
      backLeftBtnLeft: {
        backgroundColor: '#545455',
      },
      backRightBtnLeft: {
        backgroundColor: '#5866AF',
      },
      backRightBtnRight: {
        backgroundColor: '#60BA52',
      },
      right: {
        borderBottomColor: '#EDEDED',
      },
      title: {
        color: '#042C5C',
      },
      text: {
        color: '#77869E',
      },
      worth: {
        color: '#000',
      },
      amount: {
        color: '#77869E',
      },
    },
  },
  black: '#000',
  white: '#FFF',
  midGrey: '#727372',
  seporatorLineGrey: '#D8D8D8',
  seporatorLineLightGrey: '#DCDCDC',
  lightBlue: '#008CFF',
  word: '#4A4A4A',
  warningText: '#DF5264',
  ...styleScript(),
};


export default color;