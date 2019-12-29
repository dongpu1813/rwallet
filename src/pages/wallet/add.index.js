import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import WalletTypeList from '../../components/wallet/wallet.type.list';
import flex from '../../assets/styles/layout.flex';
import Header from '../../components/common/misc/header';
import screenHelper from '../../common/screenHelper';
import appActions from '../../redux/app/actions';

class WalletAddIndex extends Component {
    static navigationOptions = () => ({
      header: null,
    });

    listData = [
      {
        id: '1',
        title: 'Create Basic Wallet',
        text: 'Recommended for first-time users',
        icon: (<AntDesign name="wallet" size={25} style={{ color: '#515151' }} />),
        onPress: () => {
          this.createWalletFlow('WalletSelectCurrency');
        },
      },
      {
        id: '2',
        title: 'Import existing Wallet',
        text: 'Recover your wallet using your passphrase',
        icon: (<AntDesign name="download" size={25} style={{ color: '#515151' }} />),
        onPress: () => {
          this.createWalletFlow('WalletRecovery');
        },
      },
    ];

    constructor(props) {
      super(props);
      this.createWalletFlow = this.createWalletFlow.bind(this);
    }

    componentDidMount() {
      const { navigation, showPasscode } = this.props;
      if (!navigation.state.params || !navigation.state.params.skipPasscode) {
        showPasscode('verify');
      }
    }

    async createWalletFlow(page) {
      const { navigation } = this.props;
      navigation.navigate(page);
    }

    render() {
      const { navigation } = this.props;
      return (
        <View style={[flex.flex1]}>
          <Header
            title="Add Wallet"
            goBack={() => {
              navigation.goBack();
            }}
          />
          <View style={[screenHelper.styles.body]}>
            <WalletTypeList style={[{ marginTop: 10, marginHorizontal: 15 }]} data={this.listData} />
          </View>
        </View>
      );
    }
}

WalletAddIndex.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
  showPasscode: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  showPasscode: (category) => dispatch(
    appActions.showPasscode(category),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddIndex);
