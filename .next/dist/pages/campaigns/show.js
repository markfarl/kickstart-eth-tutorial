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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\PROJECT SYNC\\DAPP\\UDEMY\\kickstart-eth-tutorial\\pages\\campaigns\\show.js?entry';


var CamapignShow = function (_Component) {
	(0, _inherits3.default)(CamapignShow, _Component);

	function CamapignShow() {
		(0, _classCallCheck3.default)(this, CamapignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CamapignShow.__proto__ || (0, _getPrototypeOf2.default)(CamapignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CamapignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestCount = _props.requestCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Address of Manager',
				description: 'The Manager created this campaign',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'minimumContribution (wei)',
				description: 'Min wei to contribute to campaign',
				style: { overflowWrap: 'break-word' }
			}, {
				header: requestCount,
				meta: 'amount of requests',
				description: 'Requests must be approved by approvers',
				style: { overflowWrap: 'break-word' }
			}, {
				header: approversCount,
				meta: 'amount of approvers',
				description: 'Amount of donatiosn to campaigns',
				style: { overflowWrap: 'break-word' }
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Balance in (eter)',
				description: 'Amount of donations to campaigns',
				style: { overflowWrap: 'break-word' }
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Show Campaigns'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CamapignShow;
}(_react.Component);

exports.default = CamapignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDYW1wYWlnbiIsIkNvbnRyaWJ1dGVGb3JtIiwiQ2FtYXBpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFckI7Ozs7Ozs7Ozs7O2dDQWFRO2dCQU9SLEtBUFEsQUFPSDtPQVBHLEFBRVgsaUJBRlcsQUFFWDtPQUZXLEFBR1gsaUJBSFcsQUFHWDtPQUhXLEFBSVgsNkJBSlcsQUFJWDtPQUpXLEFBS1gsc0JBTFcsQUFLWDtPQUxXLEFBTVgsd0JBTlcsQUFNWCxBQUdEOztPQUFNO1lBQ0wsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0FMSSxBQUNiLEFBSVEsQUFBZTtBQUp2QixBQUNDLElBRlk7WUFPYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBQyxjQVhJLEFBT2IsQUFJUSxBQUFlO0FBSnZCLEFBQ0M7WUFLRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBQyxjQWpCSSxBQWFiLEFBSVEsQUFBZTtBQUp2QixBQUNDO1lBS0QsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUMsY0F2QkksQUFtQmIsQUFJUSxBQUFlO0FBSnZCLEFBQ0M7WUFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FENUIsQUFDUyxBQUE0QixBQUNwQztVQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdjLEFBQ2I7V0FBTyxFQUFDLGNBN0JWLEFBQWMsQUF5QmIsQUFJUSxBQUFlLEFBSXhCO0FBUkMsQUFDQzs7d0NBT0ssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUVBLEFBQ1A7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLG1DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFFQztBQUZEO0FBQUEsc0JBRUUsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNFO0FBREY7V0FGRCxBQUVDLEFBQ0UsQUFBSyxBQUdQLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBVkosQUFDQyxBQUVDLEFBTUMsQUFDQyxBQU1KO0FBTkk7Ozs7Ozt3R0FuRXdCLEE7Ozs7O1lBQ3RCO0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7ZUFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7WUFBOUM7QTs7a0JBRUksTUFBQSxBQUFNLE1BRFQsQUFDZSxBQUNyQjs4QkFBcUIsUUFGZixBQUVlLEFBQVEsQUFDN0I7a0JBQVMsUUFISCxBQUdHLEFBQVEsQUFDakI7dUJBQWMsUUFKUixBQUlRLEFBQVEsQUFDdEI7eUJBQWdCLFFBTFYsQUFLVSxBQUFRLEFBQ3hCO2tCQUFTLFFBQUEsQUFBUSxBLEFBTlg7QUFBQSxBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTHdCLEEsQUE2RTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUFJPSkVDVCBTWU5DL0RBUFAvVURFTVkva2lja3N0YXJ0LWV0aC10dXRvcmlhbCJ9