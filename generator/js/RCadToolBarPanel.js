
      // auto generated
      //var self;

      // class constructor:
      function RCadToolBarPanel() {
        

        // should be RCadToolBarPanel_BaseJs.call(this, engine):
        //RCadToolBarPanel.prototype = new RCadToolBarPanel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCadToolBarPanel.getIdStatic()))) {

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
            qWarning("RCadToolBarPanel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RCadToolBarPanel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel(): wrong number / type of arguments");
      
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

      //RCadToolBarPanel.prototype = new RCadToolBarPanel_BaseJs(engine);
      //RCadToolBarPanel.prototype = new RCadToolBarPanel_Wrapper(engine);
      RCadToolBarPanel.prototype = new Object();


      RCadToolBarPanel.prototype.toString = function() {
          //return "RCadToolBarPanel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCadToolBarPanel [JS]";
        };
      RCadToolBarPanel.getObjectType = function() {
        return RJSType_RCadToolBarPanel.getIdStatic();
      };

      RCadToolBarPanel.prototype.getObjectType = function() {
        return RJSType_RCadToolBarPanel.getIdStatic();
      };

      RCadToolBarPanel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCadToolBarPanel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RCadToolBarPanel.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        RCadToolBarPanel.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.findChild = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.children = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.property = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.parent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.devType = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isModal = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.window = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFont = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setMask = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mask = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.grab = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.update = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.repaint = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.show = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hide = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.close = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.raise = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.lower = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.move = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.resize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.windowState = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.layout = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setParent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.scroll = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.addActions = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.actions = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.windowType = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.childAt = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.event = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        RCadToolBarPanel.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        RCadToolBarPanel.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        RCadToolBarPanel.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        RCadToolBarPanel.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        RCadToolBarPanel.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        RCadToolBarPanel.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      RCadToolBarPanel.prototype.actionEvent = function() 
        
      {
        //print("JS: RCadToolBarPanel.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RCadToolBarPanel);
  }

  
  else {
    
        print("RCadToolBarPanel.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        RCadToolBarPanel.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.metric = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.redirected = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.create = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.destroy = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.addAction = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.actionAdded = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.actionAdded");
          
              return this.__PROXY__.actionAdded(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.setBackMenuName = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.setBackMenuName");
          
              return this.__PROXY__.setBackMenuName(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.getButtonName = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.getButtonName");
          
              return this.__PROXY__.getButtonName(...args);
            
        };
        
        // function 
        RCadToolBarPanel.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RCadToolBarPanel.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RCadToolBarPanel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RCadToolBarPanel.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RCadToolBarPanel.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        RCadToolBarPanel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCadToolBarPanel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCadToolBarPanel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCadToolBarPanel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCadToolBarPanel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCadToolBarPanel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      