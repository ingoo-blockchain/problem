"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController(_ref) {
    var userService = _ref.userService;

    _classCallCheck(this, UserController);

    this.userService = userService;
  }

  _createClass(UserController, [{
    key: "Inform",
    value: function Inform(req, res, next) {
      var _req$headers$authoriz, _req$headers$authoriz2, type, token, user;

      return regeneratorRuntime.async(function Inform$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (req.headers.authorization) {
                _context.next = 3;
                break;
              }

              throw new Error("SignIn is Invalid, Please Sign in your account");

            case 3:
              _req$headers$authoriz = req.headers.authorization.split(" "), _req$headers$authoriz2 = _slicedToArray(_req$headers$authoriz, 2), type = _req$headers$authoriz2[0], token = _req$headers$authoriz2[1];

              if (!(type.toLowerCase() !== "bearer")) {
                _context.next = 6;
                break;
              }

              throw new Error("Error occurred Invalid Authorization. Please close the browser and then try again.");

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(this.userService.me(token));

            case 8:
              user = _context.sent;
              console.log("controlToken", token);
              console.log("control", user);
              res.json(user);
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              next(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 14]]);
    }
  }, {
    key: "postSignUp",
    value: function postSignUp(req, res, next) {
      var _req$body, userId, userPw, userName, provider, userBirth, userGender, userPhone, userEmail, userAddress, user;

      return regeneratorRuntime.async(function postSignUp$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, userId = _req$body.userId, userPw = _req$body.userPw, userName = _req$body.userName, provider = _req$body.provider, userBirth = _req$body.userBirth, userGender = _req$body.userGender, userPhone = _req$body.userPhone, userEmail = _req$body.userEmail, userAddress = _req$body.userAddress;
              _context2.next = 4;
              return regeneratorRuntime.awrap(this.userService.SignUp({
                userId: userId,
                userPw: userPw,
                userName: userName,
                provider: provider,
                userBirth: userBirth,
                userGender: userGender,
                userPhone: userPhone,
                userEmail: userEmail,
                userAddress: userAddress
              }));

            case 4:
              user = _context2.sent;
              res.status(201).json(user);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              next(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 8]]);
    }
  }]);

  return UserController;
}();

module.exports = UserController;