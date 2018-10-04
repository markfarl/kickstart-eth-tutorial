'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\PROJECT SYNC\\DAPP\\UDEMY\\kickstart-eth-tutorial\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log(_this.props.address);
								event.preventDefault();

								_this.setState({
									errorMessage: '',
									loading: true
								});
								campaign = (0, _campaign2.default)(_this.props.address);
								_context.prev = 4;

								console.log(_this.state.value);
								_context.next = 8;
								return _web2.default.eth.getAccounts();

							case 8:
								accounts = _context.sent;
								_context.next = 11;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 11:
								_routes.Router.replaceRoute('/campaigns/' + _this.props.address);
								_context.next = 18;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](4);

								console.log(_context.t0);
								_this.setState({ errorMessage: _context.t0.message });

							case 18:
								_this.setState({
									loading: false,
									value: ''
								});

							case 19:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 14]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Contribute'));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYWRkcmVzcyIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFHakIsQTs7Ozs7Ozs7Ozs7Ozs7OzBOQUNMLEE7VUFBUSxBQUNBLEFBQ1A7aUJBRk8sQUFFTyxBQUNkO1lBSE8sQUFHRSxBO0FBSEYsQUFDUCxXQUtELEE7d0ZBQVcsaUJBQUEsQUFBTSxPQUFOO2tCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtnQkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO2NBQUEsQUFBTSxBQUVOOztjQUFBLEFBQUs7dUJBQVMsQUFDQyxBQUNkO2tCQUZELEFBQWMsQUFFTCxBQUVIO0FBSlEsQUFDYjtBQUxTLG1CQVFPLHdCQUFTLE1BQUEsQUFBSyxNQVJyQixBQVFPLEFBQW9CO3dCQUVwQzs7Z0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQVZSLEFBVVQsQUFBdUI7d0JBVmQ7ZUFXYyxjQUFBLEFBQUssSUFYbkIsQUFXYyxBQUFTOztZQUExQjtBQVhHLDRCQUFBO3dCQUFBO3dCQVlILEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjtlQUU3QixTQURQLEFBQ08sQUFBUyxBQUNmO2dCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FmM0IsQUFZSCxBQUNOLEFBRVEsQUFBbUM7QUFGM0MsQUFDQyxTQUZLOztZQUtOO3VCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWpCOUIsQUFpQlQsQUFBNkM7d0JBakJwQztBQUFBOztZQUFBO3dCQUFBO3dDQW1CVDs7Z0JBQUEsQUFBUSxhQUNSO2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQXBCckIsQUFvQlQsQUFBYyxBQUFvQjs7WUFHbkM7Y0FBQSxBQUFLO2tCQUFTLEFBQ0wsQUFDUjtnQkF6QlMsQUF1QlYsQUFBYyxBQUVQO0FBRk8sQUFDYjs7WUF4QlM7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQTZCSDtnQkFDUDs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRnZELEFBR0M7V0FIRCxBQUdPLEFBQ047bUJBSkQsQUFJZTs7ZUFKZjtpQkFIRixBQUNDLEFBRUMsQUFPRDtBQVBDO0FBQ0Msd0JBTUYsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixRQUFPLFNBQVMsS0FBQSxBQUFLLE1BQTNDLEFBQWlEO2VBQWpEO2lCQVZELEFBVUMsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztlQUFwQztpQkFBQTtBQUFBO01BWkYsQUFDQyxBQVdDLEFBS0Y7Ozs7O0FBdEQyQixBLEFBeUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9QUk9KRUNUIFNZTkMvREFQUC9VREVNWS9raWNrc3RhcnQtZXRoLXR1dG9yaWFsIn0=