
      // auto generated
      //var self;

      // class constructor:
      function RMathComboBox() {
        

        // should be RMathComboBox_BaseJs.call(this, engine):
        //RMathComboBox.prototype = new RMathComboBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMathComboBox.getIdStatic()))) {

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
            qWarning("RMathComboBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMathComboBox_Wrapper(
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

      

        //copyProperties(this, wrapper, RMathComboBox);
  }

  
  else {
    
        print("RMathComboBox(): wrong number / type of arguments");
      
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

      //RMathComboBox.prototype = new RMathComboBox_BaseJs(engine);
      //RMathComboBox.prototype = new RMathComboBox_Wrapper(engine);
      RMathComboBox.prototype = new Object();


      RMathComboBox.prototype.toString = function() {
          //return "RMathComboBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMathComboBox [JS]";
        };
      RMathComboBox.getObjectType = function() {
        return RJSType_RMathComboBox.getIdStatic();
      };

      RMathComboBox.prototype.getObjectType = function() {
        return RJSType_RMathComboBox.getIdStatic();
      };

      RMathComboBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMathComboBox.getIdStatic()) {
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
RMathComboBox.NoInsert = RMathComboBox_Wrapper.NoInsert;
RMathComboBox.InsertAtTop = RMathComboBox_Wrapper.InsertAtTop;
RMathComboBox.InsertAtCurrent = RMathComboBox_Wrapper.InsertAtCurrent;
RMathComboBox.InsertAtBottom = RMathComboBox_Wrapper.InsertAtBottom;
RMathComboBox.InsertAfterCurrent = RMathComboBox_Wrapper.InsertAfterCurrent;
RMathComboBox.InsertBeforeCurrent = RMathComboBox_Wrapper.InsertBeforeCurrent;
RMathComboBox.InsertAlphabetically = RMathComboBox_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RMathComboBox.AdjustToContents = RMathComboBox_Wrapper.AdjustToContents;
RMathComboBox.AdjustToContentsOnFirstShow = RMathComboBox_Wrapper.AdjustToContentsOnFirstShow;
RMathComboBox.AdjustToMinimumContentsLengthWithIcon = RMathComboBox_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RMathComboBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.children = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.property = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.parent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.devType = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.window = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mask = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.grab = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.update = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.show = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hide = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.close = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.raise = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.lower = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.move = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.resize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.layout = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.actions = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.event = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.metric = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.create = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMaxVisibleItems");
          
              return this.__PROXY__.setMaxVisibleItems(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMaxCount = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMaxCount");
          
              return this.__PROXY__.setMaxCount(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setDuplicatesEnabled = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setDuplicatesEnabled");
          
              return this.__PROXY__.setDuplicatesEnabled(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setFrame = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.findText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.findText");
          
              return this.__PROXY__.findText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.findData = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.findData");
          
              return this.__PROXY__.findData(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setInsertPolicy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setInsertPolicy");
          
              return this.__PROXY__.setInsertPolicy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setMinimumContentsLength = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setMinimumContentsLength");
          
              return this.__PROXY__.setMinimumContentsLength(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isEditable");
          
              return this.__PROXY__.isEditable(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setEditable = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setEditable");
          
              return this.__PROXY__.setEditable(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setLineEdit = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setLineEdit");
          
              return this.__PROXY__.setLineEdit(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.lineEdit = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.lineEdit");
          
              return this.__PROXY__.lineEdit(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setValidator = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.completer = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.model = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setModelColumn = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setModelColumn");
          
              return this.__PROXY__.setModelColumn(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.itemText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.itemText");
          
              return this.__PROXY__.itemText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.itemIcon = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.itemIcon");
          
              return this.__PROXY__.itemIcon(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.itemData = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.itemData");
          
              return this.__PROXY__.itemData(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.addItem = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.addItems = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.addItems");
          
              return this.__PROXY__.addItems(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.insertItem = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.insertItems = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.insertItems");
          
              return this.__PROXY__.insertItems(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.removeItem = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setItemText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setItemText");
          
              return this.__PROXY__.setItemText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setItemIcon = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setItemIcon");
          
              return this.__PROXY__.setItemIcon(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setItemData = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setItemData");
          
              return this.__PROXY__.setItemData(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.view = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.view");
          
              return this.__PROXY__.view(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showPopup = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showPopup");
          
              return this.__PROXY__.showPopup(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hidePopup = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hidePopup");
          
              return this.__PROXY__.hidePopup(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.clear = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.clearEditText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.clearEditText");
          
              return this.__PROXY__.clearEditText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setEditText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setEditText");
          
              return this.__PROXY__.setEditText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setCurrentText = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setCurrentText");
          
              return this.__PROXY__.setCurrentText(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.getMathLineEdit = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.getMathLineEdit");
          
              return this.__PROXY__.getMathLineEdit(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isAngle = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isAngle");
          
              return this.__PROXY__.isAngle(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setAngle");
          
              return this.__PROXY__.setAngle(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isScale = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isScale");
          
              return this.__PROXY__.isScale(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setScale = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setScale");
          
              return this.__PROXY__.setScale(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isInteger = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isInteger");
          
              return this.__PROXY__.isInteger(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setInteger = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setInteger");
          
              return this.__PROXY__.setInteger(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.setValue = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.getValue = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.getValue");
          
              return this.__PROXY__.getValue(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.getError = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.getError");
          
              return this.__PROXY__.getError(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.clearError = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.clearError");
          
              return this.__PROXY__.clearError(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isValid = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.isSane = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.isSane");
          
              return this.__PROXY__.isSane(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.slotTextChanged = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.slotTextChanged");
          
              return this.__PROXY__.slotTextChanged(...args);
            
        };
        
        // function 
        RMathComboBox.prototype.slotValueChanged = function(...args) 
          
        {
          //print("JS: RMathComboBox.prototype.slotValueChanged");
          
              return this.__PROXY__.slotValueChanged(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RMathComboBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'currentData', {
              get: function() {
                  
                      return this.__PROXY__.currentData;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'currentText', {
              get: function() {
                  
                      return this.__PROXY__.currentText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'duplicatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.duplicatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDuplicatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'editable', {
              get: function() {
                  
                      return this.__PROXY__.isEditable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'insertPolicy', {
              get: function() {
                  
                      return this.__PROXY__.insertPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInsertPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maxCount', {
              get: function() {
                  
                      return this.__PROXY__.maxCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'maxVisibleItems', {
              get: function() {
                  
                      return this.__PROXY__.maxVisibleItems;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxVisibleItems(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'minimumContentsLength', {
              get: function() {
                  
                      return this.__PROXY__.minimumContentsLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumContentsLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'modelColumn', {
              get: function() {
                  
                      return this.__PROXY__.modelColumn;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModelColumn(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'sizeAdjustPolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizeAdjustPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeAdjustPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RMathComboBox.prototype, 'integer', {
              get: function() {
                  
                      return this.__PROXY__.isInteger();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'editTextChanged', {
            get: function() { return this.__PROXY__.editTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'editTextChanged(QString)', {
              get: function() { return this.__PROXY__.editTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'activated(int)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'textActivated', {
            get: function() { return this.__PROXY__.textActivated; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'textActivated(QString)', {
              get: function() { return this.__PROXY__.textActivated; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'highlighted', {
            get: function() { return this.__PROXY__.highlighted; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'highlighted(int)', {
              get: function() { return this.__PROXY__.highlighted; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'textHighlighted', {
            get: function() { return this.__PROXY__.textHighlighted; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'textHighlighted(QString)', {
              get: function() { return this.__PROXY__.textHighlighted; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'currentIndexChanged', {
            get: function() { return this.__PROXY__.currentIndexChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'currentIndexChanged(int)', {
              get: function() { return this.__PROXY__.currentIndexChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'currentTextChanged', {
            get: function() { return this.__PROXY__.currentTextChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'currentTextChanged(QString)', {
              get: function() { return this.__PROXY__.currentTextChanged; },
              configurable: true
          });
        
        Object.defineProperty(RMathComboBox.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(RMathComboBox.prototype, 'valueChanged(double,QString)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        RMathComboBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMathComboBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMathComboBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMathComboBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMathComboBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMathComboBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      