
      // auto generated
      //var self;

      // class constructor:
      function RFontChooserWidget() {
        

        // should be RFontChooserWidget_BaseJs.call(this, engine):
        //RFontChooserWidget.prototype = new RFontChooserWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFontChooserWidget.getIdStatic()))) {

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
            qWarning("RFontChooserWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RFontChooserWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget(): wrong number / type of arguments");
      
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

      //RFontChooserWidget.prototype = new RFontChooserWidget_BaseJs(engine);
      //RFontChooserWidget.prototype = new RFontChooserWidget_Wrapper(engine);
      RFontChooserWidget.prototype = new Object();


      RFontChooserWidget.prototype.toString = function() {
          //return "RFontChooserWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFontChooserWidget [JS]";
        };
      RFontChooserWidget.getObjectType = function() {
        return RJSType_RFontChooserWidget.getIdStatic();
      };

      RFontChooserWidget.prototype.getObjectType = function() {
        return RJSType_RFontChooserWidget.getIdStatic();
      };

      RFontChooserWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFontChooserWidget.getIdStatic()) {
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
        RFontChooserWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.getChosenFont = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.getChosenFont");
          
              return this.__PROXY__.getChosenFont(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setChosenFont = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setChosenFont");
          
              return this.__PROXY__.setChosenFont(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.getSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.getSize");
          
              return this.__PROXY__.getSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setSize = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setSize");
          
              return this.__PROXY__.setSize(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.getLabel = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.getLabel");
          
              return this.__PROXY__.getLabel(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.setLabel = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.setLabel");
          
              return this.__PROXY__.setLabel(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.chosenFontChanged = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.chosenFontChanged");
          
              return this.__PROXY__.chosenFontChanged(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.sizeChanged = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.sizeChanged");
          
              return this.__PROXY__.sizeChanged(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        RFontChooserWidget.prototype.updateSizeCombo = function(...args) 
          
        {
          //print("JS: RFontChooserWidget.prototype.updateSizeCombo");
          
              return this.__PROXY__.updateSizeCombo(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RFontChooserWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'chosenFont', {
              get: function() {
                  
                      return this.__PROXY__.getChosenFont();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChosenFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RFontChooserWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RFontChooserWidget.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RFontChooserWidget.prototype, 'valueChanged(QFont)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        RFontChooserWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFontChooserWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFontChooserWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFontChooserWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFontChooserWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFontChooserWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      