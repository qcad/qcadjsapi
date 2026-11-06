
      // auto generated
      //var self;

      // class constructor:
      function RWidget() {
        

        // should be RWidget_BaseJs.call(this, engine):
        //RWidget.prototype = new RWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWidget.getIdStatic()))) {

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
            qWarning("RWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget(): wrong number / type of arguments");
      
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

      //RWidget.prototype = new RWidget_BaseJs(engine);
      //RWidget.prototype = new RWidget_Wrapper(engine);
      RWidget.prototype = new Object();


      RWidget.prototype.toString = function() {
          //return "RWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWidget [JS]";
        };
      RWidget.getObjectType = function() {
        return RJSType_RWidget.getIdStatic();
      };

      RWidget.prototype.getObjectType = function() {
        return RJSType_RWidget.getIdStatic();
      };

      RWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RWidget.prototype.actionAdded = function(...args) 
          
        {
          //print("JS: RWidget.prototype.actionAdded");
          
              return this.__PROXY__.actionAdded(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        RWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      