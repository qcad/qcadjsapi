
      // auto generated
      //var self;

      // class constructor:
      function RMathLineEdit() {
        

        // should be RMathLineEdit_BaseJs.call(this, engine):
        //RMathLineEdit.prototype = new RMathLineEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMathLineEdit.getIdStatic()))) {

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
            qWarning("RMathLineEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMathLineEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //RMathLineEdit.prototype = new RMathLineEdit_BaseJs(engine);
      //RMathLineEdit.prototype = new RMathLineEdit_Wrapper(engine);
      RMathLineEdit.prototype = new Object();


      RMathLineEdit.prototype.toString = function() {
          //return "RMathLineEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMathLineEdit [JS]";
        };
      RMathLineEdit.getObjectType = function() {
        return RJSType_RMathLineEdit.getIdStatic();
      };

      RMathLineEdit.prototype.getObjectType = function() {
        return RJSType_RMathLineEdit.getIdStatic();
      };

      RMathLineEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMathLineEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLineEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ActionPosition
RMathLineEdit.LeadingPosition = RMathLineEdit_Wrapper.LeadingPosition;
RMathLineEdit.TrailingPosition = RMathLineEdit_Wrapper.TrailingPosition;

  // enum: EchoMode
RMathLineEdit.Normal = RMathLineEdit_Wrapper.Normal;
RMathLineEdit.NoEcho = RMathLineEdit_Wrapper.NoEcho;
RMathLineEdit.Password = RMathLineEdit_Wrapper.Password;
RMathLineEdit.PasswordEchoOnEdit = RMathLineEdit_Wrapper.PasswordEchoOnEdit;


      // functions:
      
        // function 
        RMathLineEdit.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.findChild = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.children = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.property = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.parent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.devType = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isModal = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.window = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFont = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMask = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mask = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.grab = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.update = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.repaint = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.show = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hide = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.close = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.raise = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.lower = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.move = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.resize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.windowState = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.layout = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setParent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.scroll = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.addActions = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.actions = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.windowType = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.childAt = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.event = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.metric = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.redirected = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.create = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.destroy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setMaxLength = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setMaxLength");
          
              return this.__PROXY__.setMaxLength(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setClearButtonEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setClearButtonEnabled");
          
              return this.__PROXY__.setClearButtonEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isClearButtonEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isClearButtonEnabled");
          
              return this.__PROXY__.isClearButtonEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setEchoMode = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setEchoMode");
          
              return this.__PROXY__.setEchoMode(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.completer = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setCursorPosition = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setCursorPosition");
          
              return this.__PROXY__.setCursorPosition(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorPositionAt = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorPositionAt");
          
              return this.__PROXY__.cursorPositionAt(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorForward = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorForward");
          
              return this.__PROXY__.cursorForward(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorBackward = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorBackward");
          
              return this.__PROXY__.cursorBackward(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorWordForward = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorWordForward");
          
              return this.__PROXY__.cursorWordForward(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorWordBackward = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorWordBackward");
          
              return this.__PROXY__.cursorWordBackward(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.backspace = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.backspace");
          
              return this.__PROXY__.backspace(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.del = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.del");
          
              return this.__PROXY__.del(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.home = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.home");
          
              return this.__PROXY__.home(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.end = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.end");
          
              return this.__PROXY__.end(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isModified = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setModified = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setSelection = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.selectionStart = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.selectionStart");
          
              return this.__PROXY__.selectionStart(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.selectionEnd = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.selectionEnd");
          
              return this.__PROXY__.selectionEnd(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.selectionLength = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.selectionLength");
          
              return this.__PROXY__.selectionLength(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isUndoAvailable = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isUndoAvailable");
          
              return this.__PROXY__.isUndoAvailable(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isRedoAvailable = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isRedoAvailable");
          
              return this.__PROXY__.isRedoAvailable(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setCursorMoveStyle = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setCursorMoveStyle");
          
              return this.__PROXY__.setCursorMoveStyle(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.inputMask = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.inputMask");
          
              return this.__PROXY__.inputMask(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setInputMask = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setInputMask");
          
              return this.__PROXY__.setInputMask(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.hasAcceptableInput = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.hasAcceptableInput");
          
              return this.__PROXY__.hasAcceptableInput(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setTextMargins = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setTextMargins");
          
              return this.__PROXY__.setTextMargins(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.textMargins = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.textMargins");
          
              return this.__PROXY__.textMargins(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.addAction = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setText = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.clear = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.undo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.redo = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cut = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.copy = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.paste = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.deselect = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.deselect");
          
              return this.__PROXY__.deselect(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.insert = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.insert");
          
              return this.__PROXY__.insert(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isAngle = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isAngle");
          
              return this.__PROXY__.isAngle(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setAngle");
          
              return this.__PROXY__.setAngle(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isScale = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isScale");
          
              return this.__PROXY__.isScale(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setScale = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setScale");
          
              return this.__PROXY__.setScale(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isInteger = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isInteger");
          
              return this.__PROXY__.isInteger(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setInteger = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setInteger");
          
              return this.__PROXY__.setInteger(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setValue = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.getValue = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.getValue");
          
              return this.__PROXY__.getValue(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.getError = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.getError");
          
              return this.__PROXY__.getError(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.clearError = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.clearError");
          
              return this.__PROXY__.clearError(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isValid = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.isSane = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.isSane");
          
              return this.__PROXY__.isSane(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.getNormalTextColor = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.getNormalTextColor");
          
              return this.__PROXY__.getNormalTextColor(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.setTextColor = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.setTextColor");
          
              return this.__PROXY__.setTextColor(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.slotTextChanged = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.slotTextChanged");
          
              return this.__PROXY__.slotTextChanged(...args);
            
        };
    
        // function 
        RMathLineEdit.prototype.slotTextEdited = function(...args) 
          
        {
          //print("JS: RMathLineEdit.prototype.slotTextEdited");
          
              return this.__PROXY__.slotTextEdited(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RMathLineEdit.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'maxLength', {
              get: function() {
                  
                      return this.__PROXY__.maxLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'echoMode', {
              get: function() {
                  
                      return this.__PROXY__.echoMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEchoMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'displayText', {
              get: function() {
                  
                      return this.__PROXY__.displayText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'cursorPosition', {
              get: function() {
                  
                      return this.__PROXY__.cursorPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'modified', {
              get: function() {
                  
                      return this.__PROXY__.isModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'hasSelectedText', {
              get: function() {
                  
                      return this.__PROXY__.hasSelectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'selectedText', {
              get: function() {
                  
                      return this.__PROXY__.selectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'undoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isUndoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'redoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isRedoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'acceptableInput', {
              get: function() {
                  
                      return this.__PROXY__.hasAcceptableInput();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'cursorMoveStyle', {
              get: function() {
                  
                      return this.__PROXY__.cursorMoveStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorMoveStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'clearButtonEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isClearButtonEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setClearButtonEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'scale', {
              get: function() {
                  
                      return this.__PROXY__.isScale();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathLineEdit.prototype, 'integer', {
              get: function() {
                  
                      return this.__PROXY__.isInteger();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMathLineEdit.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathLineEdit.prototype, 'textChanged(QString)', {
              get: function() { return this.__PROXY__.textChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'textEdited', {
            get: function() { return this.__PROXY__.textEdited; },
            configurable: true
        });
        
          Object.defineProperty(RMathLineEdit.prototype, 'textEdited(QString)', {
              get: function() { return this.__PROXY__.textEdited; },
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathLineEdit.prototype, 'cursorPositionChanged(int,int)', {
              get: function() { return this.__PROXY__.cursorPositionChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'returnPressed', {
            get: function() { return this.__PROXY__.returnPressed; },
            configurable: true
        });
        
        Object.defineProperty(RMathLineEdit.prototype, 'editingFinished', {
            get: function() { return this.__PROXY__.editingFinished; },
            configurable: true
        });
        
        Object.defineProperty(RMathLineEdit.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RMathLineEdit.prototype, 'inputRejected', {
            get: function() { return this.__PROXY__.inputRejected; },
            configurable: true
        });
        
        Object.defineProperty(RMathLineEdit.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathLineEdit.prototype, 'valueChanged(double,QString)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathLineEdit.prototype, 'upKeyPressed', {
            get: function() { return this.__PROXY__.upKeyPressed; },
            configurable: true
        });
        
        Object.defineProperty(RMathLineEdit.prototype, 'downKeyPressed', {
            get: function() { return this.__PROXY__.downKeyPressed; },
            configurable: true
        });
        RMathLineEdit.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMathLineEdit.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMathLineEdit.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMathLineEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMathLineEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMathLineEdit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      