
      // auto generated
      //var self;

      // class constructor:
      function RSingleApplication() {
        

        // should be RSingleApplication_BaseJs.call(this, engine):
        //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSingleApplication.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RSingleApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSingleApplication.js: No constructor found for class RSingleApplication");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //RSingleApplication.prototype = new RSingleApplication_BaseJs(engine);
      //RSingleApplication.prototype = new RSingleApplication_Wrapper(engine);
      RSingleApplication.prototype = new Object();


      RSingleApplication.prototype.toString = function() {
          //return "RSingleApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSingleApplication [JS]";
        };
      RSingleApplication.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.getObjectType = function() {
        return RJSType_RSingleApplication.getIdStatic();
      };

      RSingleApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSingleApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QCoreApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGuiApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QApplication.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSingleApplication.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.findChild = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.children = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setParent = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.property = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.parent = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setOrganizationDomain = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setOrganizationDomain");
          
              return this.__PROXY__.setOrganizationDomain(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setOrganizationName = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setOrganizationName");
          
              return this.__PROXY__.setOrganizationName(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setApplicationName = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setApplicationName");
          
              return this.__PROXY__.setApplicationName(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setApplicationVersion = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setApplicationVersion");
          
              return this.__PROXY__.setApplicationVersion(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isQuitLockEnabled = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isQuitLockEnabled");
          
              return this.__PROXY__.isQuitLockEnabled(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setQuitLockEnabled = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setQuitLockEnabled");
          
              return this.__PROXY__.setQuitLockEnabled(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.qt_sendSpontaneousEvent = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.qt_sendSpontaneousEvent");
          
              return this.__PROXY__.qt_sendSpontaneousEvent(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.qAppName = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.qAppName");
          
              return this.__PROXY__.qAppName(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isSessionRestored = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isSessionRestored");
          
              return this.__PROXY__.isSessionRestored(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.sessionId = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.sessionId");
          
              return this.__PROXY__.sessionId(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.sessionKey = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.sessionKey");
          
              return this.__PROXY__.sessionKey(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isSavingSession = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isSavingSession");
          
              return this.__PROXY__.isSavingSession(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.event = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.compressEvent = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.compressEvent");
          
              return this.__PROXY__.compressEvent(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.notify = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.notify");
          
              return this.__PROXY__.notify(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setAutoSipEnabled = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setAutoSipEnabled");
          
              return this.__PROXY__.setAutoSipEnabled(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.getInstance = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.getInstance");
          
              return this.__PROXY__.getInstance(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.isRunning = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.isRunning");
          
              return this.__PROXY__.isRunning(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.id = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.id");
          
              return this.__PROXY__.id(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.setActivationWindow = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.setActivationWindow");
          
              return this.__PROXY__.setActivationWindow(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.activationWindow = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.activationWindow");
          
              return this.__PROXY__.activationWindow(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.sendMessage = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.sendMessage");
          
              return this.__PROXY__.sendMessage(...args);
            
        };
    
        // function 
        RSingleApplication.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RSingleApplication.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    

      // static functions:
      

        // static function 
        RSingleApplication.getInstance = function() 
          
        {
          //print("JS: RSingleApplication.getInstance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSingleApplication_WrapperSingletonInstance.getInstance(
                  
                );
              

        //copyProperties(this, wrapper, RSingleApplication);
  }

  
  else {
    
        print("RSingleApplication.getInstance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(RSingleApplication.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'applicationName', {
              get: function() {
                  
                      return this.__PROXY__.applicationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'applicationVersion', {
              get: function() {
                  
                      return this.__PROXY__.applicationVersion;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationVersion(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'organizationDomain', {
              get: function() {
                  
                      return this.__PROXY__.organizationDomain;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationDomain(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'organizationName', {
              get: function() {
                  
                      return this.__PROXY__.organizationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'quitLockEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isQuitLockEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setQuitLockEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'doubleClickInterval', {
              get: function() {
                  
                      return this.__PROXY__.doubleClickInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDoubleClickInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'keyboardInputInterval', {
              get: function() {
                  
                      return this.__PROXY__.keyboardInputInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setKeyboardInputInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'wheelScrollLines', {
              get: function() {
                  
                      return this.__PROXY__.wheelScrollLines;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWheelScrollLines(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'startDragTime', {
              get: function() {
                  
                      return this.__PROXY__.startDragTime;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStartDragTime(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'startDragDistance', {
              get: function() {
                  
                      return this.__PROXY__.startDragDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStartDragDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RSingleApplication.prototype, 'autoSipEnabled', {
              get: function() {
                  
                      return this.__PROXY__.autoSipEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoSipEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'organizationNameChanged', {
            get: function() { return this.__PROXY__.organizationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'organizationDomainChanged', {
            get: function() { return this.__PROXY__.organizationDomainChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'applicationNameChanged', {
            get: function() { return this.__PROXY__.applicationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'applicationVersionChanged', {
            get: function() { return this.__PROXY__.applicationVersionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'fontDatabaseChanged', {
            get: function() { return this.__PROXY__.fontDatabaseChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'screenAdded', {
            get: function() { return this.__PROXY__.screenAdded; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'screenAdded(QScreen*)', {
              get: function() { return this.__PROXY__.screenAdded; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'screenRemoved', {
            get: function() { return this.__PROXY__.screenRemoved; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'screenRemoved(QScreen*)', {
              get: function() { return this.__PROXY__.screenRemoved; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'primaryScreenChanged', {
            get: function() { return this.__PROXY__.primaryScreenChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'primaryScreenChanged(QScreen*)', {
              get: function() { return this.__PROXY__.primaryScreenChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'lastWindowClosed', {
            get: function() { return this.__PROXY__.lastWindowClosed; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'focusObjectChanged', {
            get: function() { return this.__PROXY__.focusObjectChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'focusObjectChanged(QObject*)', {
              get: function() { return this.__PROXY__.focusObjectChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'applicationStateChanged', {
            get: function() { return this.__PROXY__.applicationStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'applicationStateChanged(Qt::ApplicationState)', {
              get: function() { return this.__PROXY__.applicationStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'layoutDirectionChanged', {
            get: function() { return this.__PROXY__.layoutDirectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'layoutDirectionChanged(Qt::LayoutDirection)', {
              get: function() { return this.__PROXY__.layoutDirectionChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'applicationDisplayNameChanged', {
            get: function() { return this.__PROXY__.applicationDisplayNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(RSingleApplication.prototype, 'paletteChanged', {
            get: function() { return this.__PROXY__.paletteChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'paletteChanged(QPalette)', {
              get: function() { return this.__PROXY__.paletteChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'fontChanged', {
            get: function() { return this.__PROXY__.fontChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'fontChanged(QFont)', {
              get: function() { return this.__PROXY__.fontChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'focusChanged', {
            get: function() { return this.__PROXY__.focusChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'focusChanged(QWidget*,QWidget*)', {
              get: function() { return this.__PROXY__.focusChanged; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'messageReceived', {
            get: function() { return this.__PROXY__.messageReceived; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'messageReceived(QString)', {
              get: function() { return this.__PROXY__.messageReceived; },
              configurable: true
          });
        
        Object.defineProperty(RSingleApplication.prototype, 'fileOpenRequestReceived', {
            get: function() { return this.__PROXY__.fileOpenRequestReceived; },
            configurable: true
        });
        
          Object.defineProperty(RSingleApplication.prototype, 'fileOpenRequestReceived(QString)', {
              get: function() { return this.__PROXY__.fileOpenRequestReceived; },
              configurable: true
          });
        RSingleApplication.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RSingleApplication.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RSingleApplication.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSingleApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSingleApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSingleApplication.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      