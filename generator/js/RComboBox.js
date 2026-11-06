
      // auto generated
      //var self;

      // class constructor:
      function RComboBox() {
        

        // should be RComboBox_BaseJs.call(this, engine):
        //RComboBox.prototype = new RComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RComboBox.getIdStatic()))) {

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
            qWarning("RComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RComboBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RComboBox);
  }

  
  else {
    
        print("RComboBox(): wrong number / type of arguments");
      
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

      //RComboBox.prototype = new RComboBox_BaseJs(engine);
      //RComboBox.prototype = new RComboBox_Wrapper(engine);
      RComboBox.prototype = new Object();


      RComboBox.prototype.toString = function() {
          //return "RComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RComboBox [JS]";
        };
      RComboBox.getObjectType = function() {
        return RJSType_RComboBox.getIdStatic();
      };

      RComboBox.prototype.getObjectType = function() {
        return RJSType_RComboBox.getIdStatic();
      };

      RComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RComboBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
RComboBox.NoInsert = RComboBox_Wrapper.NoInsert;
RComboBox.InsertAtTop = RComboBox_Wrapper.InsertAtTop;
RComboBox.InsertAtCurrent = RComboBox_Wrapper.InsertAtCurrent;
RComboBox.InsertAtBottom = RComboBox_Wrapper.InsertAtBottom;
RComboBox.InsertAfterCurrent = RComboBox_Wrapper.InsertAfterCurrent;
RComboBox.InsertBeforeCurrent = RComboBox_Wrapper.InsertBeforeCurrent;
RComboBox.InsertAlphabetically = RComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RComboBox.AdjustToContents = RComboBox_Wrapper.AdjustToContents;
RComboBox.AdjustToContentsOnFirstShow = RComboBox_Wrapper.AdjustToContentsOnFirstShow;
RComboBox.AdjustToMinimumContentsLengthWithIcon = RComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RComboBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RComboBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RComboBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RComboBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RComboBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RComboBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RComboBox.prototype.children = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RComboBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RComboBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RComboBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RComboBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RComboBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RComboBox.prototype.property = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RComboBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RComboBox.prototype.parent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RComboBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RComboBox.prototype.devType = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RComboBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RComboBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RComboBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RComboBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RComboBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RComboBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RComboBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RComboBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RComboBox.prototype.window = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RComboBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RComboBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RComboBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RComboBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RComboBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RComboBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RComboBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RComboBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RComboBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RComboBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RComboBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RComboBox.prototype.mask = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RComboBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RComboBox.prototype.grab = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RComboBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RComboBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RComboBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RComboBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RComboBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RComboBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RComboBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RComboBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RComboBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RComboBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RComboBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RComboBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RComboBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RComboBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RComboBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RComboBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RComboBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RComboBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RComboBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RComboBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RComboBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RComboBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RComboBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RComboBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RComboBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RComboBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RComboBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.update = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RComboBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RComboBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RComboBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RComboBox.prototype.show = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RComboBox.prototype.hide = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RComboBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RComboBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RComboBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RComboBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RComboBox.prototype.close = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RComboBox.prototype.raise = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RComboBox.prototype.lower = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RComboBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RComboBox.prototype.move = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RComboBox.prototype.resize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RComboBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RComboBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RComboBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RComboBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RComboBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RComboBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RComboBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RComboBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RComboBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RComboBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RComboBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RComboBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RComboBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RComboBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RComboBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RComboBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RComboBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RComboBox.prototype.layout = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RComboBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RComboBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RComboBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RComboBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RComboBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RComboBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RComboBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RComboBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RComboBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RComboBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RComboBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RComboBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RComboBox.prototype.actions = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RComboBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RComboBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RComboBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RComboBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RComboBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RComboBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RComboBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RComboBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RComboBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RComboBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RComboBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RComboBox.prototype.event = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RComboBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.metric = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RComboBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RComboBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RComboBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RComboBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RComboBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RComboBox.prototype.create = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RComboBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RComboBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RComboBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RComboBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RComboBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RComboBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RComboBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
    
        // function 
        RComboBox.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
    
        // function 
        RComboBox.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        RComboBox.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        RComboBox.prototype.findText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
    
        // function 
        RComboBox.prototype.findData = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
    
        // function 
        RComboBox.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
    
        // function 
        RComboBox.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RComboBox.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
    
        // function 
        RComboBox.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RComboBox.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        RComboBox.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
    
        // function 
        RComboBox.prototype.setEditable = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
    
        // function 
        RComboBox.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
    
        // function 
        RComboBox.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
    
        // function 
        RComboBox.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        RComboBox.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        RComboBox.prototype.completer = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        RComboBox.prototype.model = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RComboBox.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
    
        // function 
        RComboBox.prototype.itemText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
    
        // function 
        RComboBox.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
    
        // function 
        RComboBox.prototype.itemData = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
    
        // function 
        RComboBox.prototype.addItem = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
    
        // function 
        RComboBox.prototype.addItems = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
    
        // function 
        RComboBox.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
    
        // function 
        RComboBox.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
    
        // function 
        RComboBox.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        RComboBox.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
    
        // function 
        RComboBox.prototype.setItemText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
    
        // function 
        RComboBox.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
    
        // function 
        RComboBox.prototype.setItemData = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
    
        // function 
        RComboBox.prototype.view = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
    
        // function 
        RComboBox.prototype.showPopup = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
    
        // function 
        RComboBox.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
    
        // function 
        RComboBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RComboBox.prototype.clear = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RComboBox.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
    
        // function 
        RComboBox.prototype.setEditText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
    
        // function 
        RComboBox.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RComboBox.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RComboBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RComboBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RComboBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RComboBox.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RComboBox.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RComboBox.prototype, 'returnPressed', {
            get: function() { return this.__PROXY__.returnPressed; },
            configurable: true
        });
        RComboBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RComboBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RComboBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RComboBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      