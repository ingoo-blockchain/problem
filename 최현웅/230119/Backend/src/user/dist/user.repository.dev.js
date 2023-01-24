"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository(_ref) {
    var User = _ref.User;

    _classCallCheck(this, UserRepository);

    this.User = User;
  }

  _createClass(UserRepository, [{
    key: "addUser",
    value: function addUser(payload) {
      var user;
      return regeneratorRuntime.async(function addUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(this.User.create(payload, {
                raw: true
              }));

            case 3:
              user = _context.sent;
              console.log("repos", user);
              return _context.abrupt("return", user);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 8]]);
    }
  }, {
    key: "getInfo",
    value: function getInfo(userId) {
      var user;
      return regeneratorRuntime.async(function getInfo$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(this.User.findOne({
                raw: true,
                where: {
                  userId: userId
                }
              }));

            case 3:
              user = _context2.sent;
              console.log("info", user);
              return _context2.abrupt("return", user);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw new Error(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 8]]);
    }
  }]);

  return UserRepository;
}();

module.exports = UserRepository;