
      // auto generated
      //var self;

      // class constructor:
      function RTreeWidget() {
        

        // should be RTreeWidget_BaseJs.call(this, engine):
        //RTreeWidget.prototype = new RTreeWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTreeWidget.getIdStatic()))) {

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
            qWarning("RTreeWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RTreeWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget(): wrong number / type of arguments");
      
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

      //RTreeWidget.prototype = new RTreeWidget_BaseJs(engine);
      //RTreeWidget.prototype = new RTreeWidget_Wrapper(engine);
      RTreeWidget.prototype = new Object();


      RTreeWidget.prototype.toString = function() {
          //return "RTreeWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTreeWidget [JS]";
        };
      RTreeWidget.getObjectType = function() {
        return RJSType_RTreeWidget.getIdStatic();
      };

      RTreeWidget.prototype.getObjectType = function() {
        return RJSType_RTreeWidget.getIdStatic();
      };

      RTreeWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTreeWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTreeView.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTreeWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
RTreeWidget.NoFrame = RTreeWidget_Wrapper.NoFrame;
RTreeWidget.Box = RTreeWidget_Wrapper.Box;
RTreeWidget.Panel = RTreeWidget_Wrapper.Panel;
RTreeWidget.WinPanel = RTreeWidget_Wrapper.WinPanel;
RTreeWidget.HLine = RTreeWidget_Wrapper.HLine;
RTreeWidget.VLine = RTreeWidget_Wrapper.VLine;
RTreeWidget.StyledPanel = RTreeWidget_Wrapper.StyledPanel;

  // enum: Shadow
RTreeWidget.Plain = RTreeWidget_Wrapper.Plain;
RTreeWidget.Raised = RTreeWidget_Wrapper.Raised;
RTreeWidget.Sunken = RTreeWidget_Wrapper.Sunken;

  // enum: StyleMask
RTreeWidget.Shadow_Mask = RTreeWidget_Wrapper.Shadow_Mask;
RTreeWidget.Shape_Mask = RTreeWidget_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
RTreeWidget.AdjustIgnored = RTreeWidget_Wrapper.AdjustIgnored;
RTreeWidget.AdjustToContentsOnFirstShow = RTreeWidget_Wrapper.AdjustToContentsOnFirstShow;
RTreeWidget.AdjustToContents = RTreeWidget_Wrapper.AdjustToContents;

  // enum: SelectionMode
RTreeWidget.NoSelection = RTreeWidget_Wrapper.NoSelection;
RTreeWidget.SingleSelection = RTreeWidget_Wrapper.SingleSelection;
RTreeWidget.MultiSelection = RTreeWidget_Wrapper.MultiSelection;
RTreeWidget.ExtendedSelection = RTreeWidget_Wrapper.ExtendedSelection;
RTreeWidget.ContiguousSelection = RTreeWidget_Wrapper.ContiguousSelection;

  // enum: SelectionBehavior
RTreeWidget.SelectItems = RTreeWidget_Wrapper.SelectItems;
RTreeWidget.SelectRows = RTreeWidget_Wrapper.SelectRows;
RTreeWidget.SelectColumns = RTreeWidget_Wrapper.SelectColumns;

  // enum: ScrollHint
RTreeWidget.EnsureVisible = RTreeWidget_Wrapper.EnsureVisible;
RTreeWidget.PositionAtTop = RTreeWidget_Wrapper.PositionAtTop;
RTreeWidget.PositionAtBottom = RTreeWidget_Wrapper.PositionAtBottom;
RTreeWidget.PositionAtCenter = RTreeWidget_Wrapper.PositionAtCenter;

  // enum: EditTrigger
RTreeWidget.NoEditTriggers = RTreeWidget_Wrapper.NoEditTriggers;
RTreeWidget.CurrentChanged = RTreeWidget_Wrapper.CurrentChanged;
RTreeWidget.DoubleClicked = RTreeWidget_Wrapper.DoubleClicked;
RTreeWidget.SelectedClicked = RTreeWidget_Wrapper.SelectedClicked;
RTreeWidget.EditKeyPressed = RTreeWidget_Wrapper.EditKeyPressed;
RTreeWidget.AnyKeyPressed = RTreeWidget_Wrapper.AnyKeyPressed;
RTreeWidget.AllEditTriggers = RTreeWidget_Wrapper.AllEditTriggers;

  // enum: ScrollMode
RTreeWidget.ScrollPerItem = RTreeWidget_Wrapper.ScrollPerItem;
RTreeWidget.ScrollPerPixel = RTreeWidget_Wrapper.ScrollPerPixel;

  // enum: DragDropMode
RTreeWidget.NoDragDrop = RTreeWidget_Wrapper.NoDragDrop;
RTreeWidget.DragOnly = RTreeWidget_Wrapper.DragOnly;
RTreeWidget.DropOnly = RTreeWidget_Wrapper.DropOnly;
RTreeWidget.DragDrop = RTreeWidget_Wrapper.DragDrop;
RTreeWidget.InternalMove = RTreeWidget_Wrapper.InternalMove;


      // functions:
      
        // function 
        RTreeWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.children = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.property = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.widthMM = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.heightMM = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.colorCount = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.depth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.window = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.show = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.close = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.move = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.create = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.viewport = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setViewport = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.model = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSelectionModel = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSelectionModel");
          
              return this.__PROXY__.setSelectionModel(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.selectionModel = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.selectionModel");
          
              return this.__PROXY__.selectionModel(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setItemDelegate = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setItemDelegate");
          
              return this.__PROXY__.setItemDelegate(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSelectionMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSelectionMode");
          
              return this.__PROXY__.setSelectionMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSelectionBehavior = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSelectionBehavior");
          
              return this.__PROXY__.setSelectionBehavior(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.currentIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.currentIndex");
          
              return this.__PROXY__.currentIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.rootIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.rootIndex");
          
              return this.__PROXY__.rootIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setEditTriggers = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setEditTriggers");
          
              return this.__PROXY__.setEditTriggers(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setVerticalScrollMode");
          
              return this.__PROXY__.setVerticalScrollMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.resetVerticalScrollMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.resetVerticalScrollMode");
          
              return this.__PROXY__.resetVerticalScrollMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHorizontalScrollMode");
          
              return this.__PROXY__.setHorizontalScrollMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.resetHorizontalScrollMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.resetHorizontalScrollMode");
          
              return this.__PROXY__.resetHorizontalScrollMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAutoScroll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAutoScroll");
          
              return this.__PROXY__.setAutoScroll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hasAutoScroll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hasAutoScroll");
          
              return this.__PROXY__.hasAutoScroll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAutoScrollMargin = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAutoScrollMargin");
          
              return this.__PROXY__.setAutoScrollMargin(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setTabKeyNavigation = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setTabKeyNavigation");
          
              return this.__PROXY__.setTabKeyNavigation(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDropIndicatorShown = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDropIndicatorShown");
          
              return this.__PROXY__.setDropIndicatorShown(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDragDropOverwriteMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDragDropOverwriteMode");
          
              return this.__PROXY__.setDragDropOverwriteMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDragDropMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDragDropMode");
          
              return this.__PROXY__.setDragDropMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setDefaultDropAction = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setDefaultDropAction");
          
              return this.__PROXY__.setDefaultDropAction(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAlternatingRowColors = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAlternatingRowColors");
          
              return this.__PROXY__.setAlternatingRowColors(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setTextElideMode = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setTextElideMode");
          
              return this.__PROXY__.setTextElideMode(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setIndexWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setIndexWidget");
          
              return this.__PROXY__.setIndexWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.edit = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.edit");
          
              return this.__PROXY__.edit(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.clearSelection");
          
              return this.__PROXY__.clearSelection(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scrollToTop = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scrollToTop");
          
              return this.__PROXY__.scrollToTop(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scrollToBottom = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scrollToBottom");
          
              return this.__PROXY__.scrollToBottom(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.update = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setRootIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setRootIndex");
          
              return this.__PROXY__.setRootIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.header = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.header");
          
              return this.__PROXY__.header(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHeader = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHeader");
          
              return this.__PROXY__.setHeader(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.autoExpandDelay = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.autoExpandDelay");
          
              return this.__PROXY__.autoExpandDelay(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAutoExpandDelay = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAutoExpandDelay");
          
              return this.__PROXY__.setAutoExpandDelay(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setIndentation = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setIndentation");
          
              return this.__PROXY__.setIndentation(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.resetIndentation = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.resetIndentation");
          
              return this.__PROXY__.resetIndentation(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setRootIsDecorated = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setRootIsDecorated");
          
              return this.__PROXY__.setRootIsDecorated(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setUniformRowHeights = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setUniformRowHeights");
          
              return this.__PROXY__.setUniformRowHeights(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setItemsExpandable = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setItemsExpandable");
          
              return this.__PROXY__.setItemsExpandable(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setExpandsOnDoubleClick = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setExpandsOnDoubleClick");
          
              return this.__PROXY__.setExpandsOnDoubleClick(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnViewportPosition = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnViewportPosition");
          
              return this.__PROXY__.columnViewportPosition(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnWidth");
          
              return this.__PROXY__.columnWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setColumnWidth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setColumnWidth");
          
              return this.__PROXY__.setColumnWidth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnAt = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnAt");
          
              return this.__PROXY__.columnAt(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isColumnHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isColumnHidden");
          
              return this.__PROXY__.isColumnHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setColumnHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setColumnHidden");
          
              return this.__PROXY__.setColumnHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isHeaderHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isHeaderHidden");
          
              return this.__PROXY__.isHeaderHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHeaderHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHeaderHidden");
          
              return this.__PROXY__.setHeaderHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isRowHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isRowHidden");
          
              return this.__PROXY__.isRowHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setRowHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setRowHidden");
          
              return this.__PROXY__.setRowHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isFirstColumnSpanned");
          
              return this.__PROXY__.isFirstColumnSpanned(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setFirstColumnSpanned = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setFirstColumnSpanned");
          
              return this.__PROXY__.setFirstColumnSpanned(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isExpanded = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isExpanded");
          
              return this.__PROXY__.isExpanded(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setExpanded = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setExpanded");
          
              return this.__PROXY__.setExpanded(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSortingEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSortingEnabled");
          
              return this.__PROXY__.setSortingEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isSortingEnabled = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isSortingEnabled");
          
              return this.__PROXY__.isSortingEnabled(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAnimated");
          
              return this.__PROXY__.setAnimated(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isAnimated");
          
              return this.__PROXY__.isAnimated(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setAllColumnsShowFocus = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setAllColumnsShowFocus");
          
              return this.__PROXY__.setAllColumnsShowFocus(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setTreePosition = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setTreePosition");
          
              return this.__PROXY__.setTreePosition(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.treePosition = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.treePosition");
          
              return this.__PROXY__.treePosition(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.keyboardSearch = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.keyboardSearch");
          
              return this.__PROXY__.keyboardSearch(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.visualRect = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.visualRect");
          
              return this.__PROXY__.visualRect(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scrollTo = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scrollTo");
          
              return this.__PROXY__.scrollTo(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexAt = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexAt");
          
              return this.__PROXY__.indexAt(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexAbove = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexAbove");
          
              return this.__PROXY__.indexAbove(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexBelow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexBelow");
          
              return this.__PROXY__.indexBelow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.doItemsLayout = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.doItemsLayout");
          
              return this.__PROXY__.doItemsLayout(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.reset = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dataChanged = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dataChanged");
          
              return this.__PROXY__.dataChanged(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.hideColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.hideColumn");
          
              return this.__PROXY__.hideColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.showColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.showColumn");
          
              return this.__PROXY__.showColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.expand = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.expand");
          
              return this.__PROXY__.expand(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.collapse = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.collapse");
          
              return this.__PROXY__.collapse(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.resizeColumnToContents = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.resizeColumnToContents");
          
              return this.__PROXY__.resizeColumnToContents(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.sortByColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.sortByColumn");
          
              return this.__PROXY__.sortByColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.expandAll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.expandAll");
          
              return this.__PROXY__.expandAll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.expandRecursively = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.expandRecursively");
          
              return this.__PROXY__.expandRecursively(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.collapseAll = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.collapseAll");
          
              return this.__PROXY__.collapseAll(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.expandToDepth = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.expandToDepth");
          
              return this.__PROXY__.expandToDepth(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnResized = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnResized");
          
              return this.__PROXY__.columnResized(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnCountChanged = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnCountChanged");
          
              return this.__PROXY__.columnCountChanged(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.columnMoved = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.columnMoved");
          
              return this.__PROXY__.columnMoved(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.reexpand = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.reexpand");
          
              return this.__PROXY__.reexpand(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.rowsRemoved = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.rowsRemoved");
          
              return this.__PROXY__.rowsRemoved(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.verticalScrollbarValueChanged = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.verticalScrollbarValueChanged");
          
              return this.__PROXY__.verticalScrollbarValueChanged(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBy(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.rowsInserted = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.rowsInserted");
          
              return this.__PROXY__.rowsInserted(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.rowsAboutToBeRemoved = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.rowsAboutToBeRemoved");
          
              return this.__PROXY__.rowsAboutToBeRemoved(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.moveCursor = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.moveCursor");
          
              return this.__PROXY__.moveCursor(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.horizontalOffset = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.horizontalOffset");
          
              return this.__PROXY__.horizontalOffset(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.verticalOffset = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.verticalOffset");
          
              return this.__PROXY__.verticalOffset(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSelection = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.visualRegionForSelection = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.visualRegionForSelection");
          
              return this.__PROXY__.visualRegionForSelection(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.selectedIndexes = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.selectedIndexes");
          
              return this.__PROXY__.selectedIndexes(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.drawTree = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.drawTree");
          
              return this.__PROXY__.drawTree(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.drawRow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.drawRow");
          
              return this.__PROXY__.drawRow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.drawBranches = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.drawBranches");
          
              return this.__PROXY__.drawBranches(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.updateGeometries = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.updateGeometries");
          
              return this.__PROXY__.updateGeometries(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHint(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexRowSizeHint = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexRowSizeHint");
          
              return this.__PROXY__.indexRowSizeHint(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.rowHeight = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.rowHeight");
          
              return this.__PROXY__.rowHeight(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.horizontalScrollbarAction = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.horizontalScrollbarAction");
          
              return this.__PROXY__.horizontalScrollbarAction(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isIndexHidden = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isIndexHidden");
          
              return this.__PROXY__.isIndexHidden(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.selectionChanged = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.selectionChanged");
          
              return this.__PROXY__.selectionChanged(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.currentChanged = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.currentChanged");
          
              return this.__PROXY__.currentChanged(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.visualIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.visualIndex");
          
              return this.__PROXY__.visualIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setColumnCount");
          
              return this.__PROXY__.setColumnCount(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.invisibleRootItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.invisibleRootItem");
          
              return this.__PROXY__.invisibleRootItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.topLevelItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.topLevelItem");
          
              return this.__PROXY__.topLevelItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.insertTopLevelItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.insertTopLevelItem");
          
              return this.__PROXY__.insertTopLevelItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.addTopLevelItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.addTopLevelItem");
          
              return this.__PROXY__.addTopLevelItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.takeTopLevelItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.takeTopLevelItem");
          
              return this.__PROXY__.takeTopLevelItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexOfTopLevelItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexOfTopLevelItem");
          
              return this.__PROXY__.indexOfTopLevelItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.insertTopLevelItems = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.insertTopLevelItems");
          
              return this.__PROXY__.insertTopLevelItems(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.addTopLevelItems = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.addTopLevelItems");
          
              return this.__PROXY__.addTopLevelItems(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.headerItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.headerItem");
          
              return this.__PROXY__.headerItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHeaderItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHeaderItem");
          
              return this.__PROXY__.setHeaderItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHeaderLabels = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHeaderLabels");
          
              return this.__PROXY__.setHeaderLabels(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setHeaderLabel = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setHeaderLabel");
          
              return this.__PROXY__.setHeaderLabel(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.currentItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.currentItem");
          
              return this.__PROXY__.currentItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.currentColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.currentColumn");
          
              return this.__PROXY__.currentColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setCurrentItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setCurrentItem");
          
              return this.__PROXY__.setCurrentItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.itemAt = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.visualItemRect = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.visualItemRect");
          
              return this.__PROXY__.visualItemRect(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.sortColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.sortColumn");
          
              return this.__PROXY__.sortColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.sortItems = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.sortItems");
          
              return this.__PROXY__.sortItems(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.editItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.editItem");
          
              return this.__PROXY__.editItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.isPersistentEditorOpen = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.isPersistentEditorOpen");
          
              return this.__PROXY__.isPersistentEditorOpen(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.itemWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.itemWidget");
          
              return this.__PROXY__.itemWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setItemWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setItemWidget");
          
              return this.__PROXY__.setItemWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.removeItemWidget = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.removeItemWidget");
          
              return this.__PROXY__.removeItemWidget(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.selectedItems = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.selectedItems");
          
              return this.__PROXY__.selectedItems(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.findItems = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.findItems");
          
              return this.__PROXY__.findItems(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.itemAbove = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.itemAbove");
          
              return this.__PROXY__.itemAbove(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.itemBelow = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.itemBelow");
          
              return this.__PROXY__.itemBelow(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.indexFromItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.indexFromItem");
          
              return this.__PROXY__.indexFromItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.itemFromIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.itemFromIndex");
          
              return this.__PROXY__.itemFromIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.scrollToItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.scrollToItem");
          
              return this.__PROXY__.scrollToItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.expandItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.expandItem");
          
              return this.__PROXY__.expandItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.collapseItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.collapseItem");
          
              return this.__PROXY__.collapseItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.event = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mimeTypes = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mimeTypes");
          
              return this.__PROXY__.mimeTypes(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.mimeData = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dropMimeData = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dropMimeData");
          
              return this.__PROXY__.dropMimeData(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.supportedDropActions = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.supportedDropActions");
          
              return this.__PROXY__.supportedDropActions(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.setSelectableColumn = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.setSelectableColumn");
          
              return this.__PROXY__.setSelectableColumn(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.getIndex = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.getIndex");
          
              return this.__PROXY__.getIndex(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.getActiveItem = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.getActiveItem");
          
              return this.__PROXY__.getActiveItem(...args);
            
        };
    
        // function 
        RTreeWidget.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: RTreeWidget.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
    
      // function 
      RTreeWidget.prototype.mousePressEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mousePressEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mousePressEvent(
                // call highest level JS implementation:
                //return this.mousePressEventBase(
                
                    return this.__PROXY__.mousePressEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mousePressEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.mouseReleaseEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mouseReleaseEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseReleaseEvent(
                // call highest level JS implementation:
                //return this.mouseReleaseEventBase(
                
                    return this.__PROXY__.mouseReleaseEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mouseReleaseEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.mouseMoveEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.mouseMoveEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.mouseMoveEvent(
                // call highest level JS implementation:
                //return this.mouseMoveEventBase(
                
                    return this.__PROXY__.mouseMoveEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.mouseMoveEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RTreeWidget.prototype.resizeEvent = function() 
        
      {
        //print("JS: RTreeWidget.prototype.resizeEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.resizeEvent(
                // call highest level JS implementation:
                //return this.resizeEventBase(
                
                    return this.__PROXY__.resizeEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTreeWidget);
  }

  
  else {
    
        print("RTreeWidget.resizeEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      
          Object.defineProperty(RTreeWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'autoScrollMargin', {
              get: function() {
                  
                      return this.__PROXY__.autoScrollMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoScrollMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'editTriggers', {
              get: function() {
                  
                      return this.__PROXY__.editTriggers;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEditTriggers(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'tabKeyNavigation', {
              get: function() {
                  
                      return this.__PROXY__.tabKeyNavigation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabKeyNavigation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'showDropIndicator', {
              get: function() {
                  
                      return this.__PROXY__.showDropIndicator;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDropIndicatorShown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'dragDropOverwriteMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropOverwriteMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropOverwriteMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'dragDropMode', {
              get: function() {
                  
                      return this.__PROXY__.dragDropMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragDropMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'defaultDropAction', {
              get: function() {
                  
                      return this.__PROXY__.defaultDropAction;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultDropAction(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'alternatingRowColors', {
              get: function() {
                  
                      return this.__PROXY__.alternatingRowColors;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlternatingRowColors(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'selectionMode', {
              get: function() {
                  
                      return this.__PROXY__.selectionMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'selectionBehavior', {
              get: function() {
                  
                      return this.__PROXY__.selectionBehavior;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSelectionBehavior(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'textElideMode', {
              get: function() {
                  
                      return this.__PROXY__.textElideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'verticalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.verticalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVerticalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'horizontalScrollMode', {
              get: function() {
                  
                      return this.__PROXY__.horizontalScrollMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHorizontalScrollMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'indentation', {
              get: function() {
                  
                      return this.__PROXY__.indentation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIndentation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'rootIsDecorated', {
              get: function() {
                  
                      return this.__PROXY__.rootIsDecorated;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setRootIsDecorated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'uniformRowHeights', {
              get: function() {
                  
                      return this.__PROXY__.uniformRowHeights;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUniformRowHeights(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemsExpandable', {
              get: function() {
                  
                      return this.__PROXY__.itemsExpandable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setItemsExpandable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'sortingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isSortingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSortingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'animated', {
              get: function() {
                  
                      return this.__PROXY__.isAnimated();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAnimated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'allColumnsShowFocus', {
              get: function() {
                  
                      return this.__PROXY__.allColumnsShowFocus;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllColumnsShowFocus(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'headerHidden', {
              get: function() {
                  
                      return this.__PROXY__.isHeaderHidden();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeaderHidden(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'expandsOnDoubleClick', {
              get: function() {
                  
                      return this.__PROXY__.expandsOnDoubleClick;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setExpandsOnDoubleClick(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'topLevelItemCount', {
              get: function() {
                  
                      return this.__PROXY__.topLevelItemCount;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(RTreeWidget.prototype, 'columnCount', {
              get: function() {
                  
                      return this.__PROXY__.columnCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setColumnCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'pressed(QModelIndex)', {
              get: function() { return this.__PROXY__.pressed; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'clicked(QModelIndex)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'doubleClicked', {
            get: function() { return this.__PROXY__.doubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'doubleClicked(QModelIndex)', {
              get: function() { return this.__PROXY__.doubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'activated(QModelIndex)', {
              get: function() { return this.__PROXY__.activated; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'entered', {
            get: function() { return this.__PROXY__.entered; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'entered(QModelIndex)', {
              get: function() { return this.__PROXY__.entered; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'expanded', {
            get: function() { return this.__PROXY__.expanded; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'expanded(QModelIndex)', {
              get: function() { return this.__PROXY__.expanded; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'collapsed', {
            get: function() { return this.__PROXY__.collapsed; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'collapsed(QModelIndex)', {
              get: function() { return this.__PROXY__.collapsed; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemPressed', {
            get: function() { return this.__PROXY__.itemPressed; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemPressed(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemPressed; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemClicked', {
            get: function() { return this.__PROXY__.itemClicked; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemClicked(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemClicked; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemDoubleClicked', {
            get: function() { return this.__PROXY__.itemDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemDoubleClicked(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemDoubleClicked; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemActivated', {
            get: function() { return this.__PROXY__.itemActivated; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemActivated(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemActivated; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemEntered', {
            get: function() { return this.__PROXY__.itemEntered; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemEntered(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemEntered; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemChanged', {
            get: function() { return this.__PROXY__.itemChanged; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemChanged(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemChanged; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemExpanded', {
            get: function() { return this.__PROXY__.itemExpanded; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemExpanded(QTreeWidgetItem*)', {
              get: function() { return this.__PROXY__.itemExpanded; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemCollapsed', {
            get: function() { return this.__PROXY__.itemCollapsed; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemCollapsed(QTreeWidgetItem*)', {
              get: function() { return this.__PROXY__.itemCollapsed; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'currentItemChanged', {
            get: function() { return this.__PROXY__.currentItemChanged; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'currentItemChanged(QTreeWidgetItem*,QTreeWidgetItem*)', {
              get: function() { return this.__PROXY__.currentItemChanged; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemSelectionChanged', {
            get: function() { return this.__PROXY__.itemSelectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(RTreeWidget.prototype, 'itemColumnClicked', {
            get: function() { return this.__PROXY__.itemColumnClicked; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'itemColumnClicked(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.itemColumnClicked; },
              configurable: true
          });
        
        Object.defineProperty(RTreeWidget.prototype, 'contextMenuRequested', {
            get: function() { return this.__PROXY__.contextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(RTreeWidget.prototype, 'contextMenuRequested(QTreeWidgetItem*,int)', {
              get: function() { return this.__PROXY__.contextMenuRequested; },
              configurable: true
          });
        RTreeWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTreeWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTreeWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTreeWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTreeWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTreeWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      