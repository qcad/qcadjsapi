
      // auto generated
      //var self;

      // class constructor:
      function RMainWindow() {
        

        // should be RMainWindow_BaseJs.call(this, engine):
        //RMainWindow.prototype = new RMainWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMainWindow.getIdStatic()))) {

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
            qWarning("RMainWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RMainWindow.js: No constructor found for class RMainWindow");
            
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

      //RMainWindow.prototype = new RMainWindow_BaseJs(engine);
      //RMainWindow.prototype = new RMainWindow_Wrapper(engine);
      RMainWindow.prototype = new Object();


      RMainWindow.prototype.toString = function() {
          //return "RMainWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMainWindow [JS]";
        };
      RMainWindow.getObjectType = function() {
        return RJSType_RMainWindow.getIdStatic();
      };

      RMainWindow.prototype.getObjectType = function() {
        return RJSType_RMainWindow.getIdStatic();
      };

      RMainWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMainWindow.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RMainWindow.prototype.getMainWindow = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getMainWindow");
          
              return this.__PROXY__.getMainWindow(...args);
            
        };
        
        // function 
        RMainWindow.prototype.hasMainWindow = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.hasMainWindow");
          
              return this.__PROXY__.hasMainWindow(...args);
            
        };
        
        // function 
        RMainWindow.prototype.installMessageHandler = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.installMessageHandler");
          
              return this.__PROXY__.installMessageHandler(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RMainWindow.prototype.disable = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.disable");
          
              return this.__PROXY__.disable(...args);
            
        };
        
        // function 
        RMainWindow.prototype.enable = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.enable");
          
              return this.__PROXY__.enable(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getDocumentInterfaceStatic = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getDocumentInterfaceStatic");
          
              return this.__PROXY__.getDocumentInterfaceStatic(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyListeners");
          
              return this.__PROXY__.notifyListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addCoordinateListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addCoordinateListener");
          
              return this.__PROXY__.addCoordinateListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeCoordinateListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeCoordinateListener");
          
              return this.__PROXY__.removeCoordinateListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyCoordinateListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyCoordinateListeners");
          
              return this.__PROXY__.notifyCoordinateListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addSelectionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addSelectionListener");
          
              return this.__PROXY__.addSelectionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeSelectionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeSelectionListener");
          
              return this.__PROXY__.removeSelectionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifySelectionListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifySelectionListeners");
          
              return this.__PROXY__.notifySelectionListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.postSelectionChangedEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.postSelectionChangedEvent");
          
              return this.__PROXY__.postSelectionChangedEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.postTransactionEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.postTransactionEvent");
          
              return this.__PROXY__.postTransactionEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.postCloseEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.postCloseEvent");
          
              return this.__PROXY__.postCloseEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.postPropertyEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.postPropertyEvent");
          
              return this.__PROXY__.postPropertyEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addPropertyListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addPropertyListener");
          
              return this.__PROXY__.addPropertyListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removePropertyListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removePropertyListener");
          
              return this.__PROXY__.removePropertyListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyPropertyListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyPropertyListeners");
          
              return this.__PROXY__.notifyPropertyListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addExportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addExportListener");
          
              return this.__PROXY__.addExportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.prependExportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.prependExportListener");
          
              return this.__PROXY__.prependExportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeExportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeExportListener");
          
              return this.__PROXY__.removeExportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyExportListenersPre = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyExportListenersPre");
          
              return this.__PROXY__.notifyExportListenersPre(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyExportListenersPost = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyExportListenersPost");
          
              return this.__PROXY__.notifyExportListenersPost(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyExportListenersEnd = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyExportListenersEnd");
          
              return this.__PROXY__.notifyExportListenersEnd(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addEntityExportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addEntityExportListener");
          
              return this.__PROXY__.addEntityExportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeEntityExportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeEntityExportListener");
          
              return this.__PROXY__.removeEntityExportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyEntityExportListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyEntityExportListeners");
          
              return this.__PROXY__.notifyEntityExportListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addImportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addImportListener");
          
              return this.__PROXY__.addImportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeImportListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeImportListener");
          
              return this.__PROXY__.removeImportListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyImportListenersPre = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyImportListenersPre");
          
              return this.__PROXY__.notifyImportListenersPre(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyImportListenersPost = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyImportListenersPost");
          
              return this.__PROXY__.notifyImportListenersPost(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addTransactionListener");
          
              return this.__PROXY__.addTransactionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeTransactionListener");
          
              return this.__PROXY__.removeTransactionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyTransactionListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyTransactionListeners");
          
              return this.__PROXY__.notifyTransactionListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addInterTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addInterTransactionListener");
          
              return this.__PROXY__.addInterTransactionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeInterTransactionListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeInterTransactionListener");
          
              return this.__PROXY__.removeInterTransactionListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyInterTransactionListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyInterTransactionListeners");
          
              return this.__PROXY__.notifyInterTransactionListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addNewDocumentListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addNewDocumentListener");
          
              return this.__PROXY__.addNewDocumentListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeNewDocumentListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeNewDocumentListener");
          
              return this.__PROXY__.removeNewDocumentListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyNewDocumentListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyNewDocumentListeners");
          
              return this.__PROXY__.notifyNewDocumentListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addSnapListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addSnapListener");
          
              return this.__PROXY__.addSnapListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeSnapListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeSnapListener");
          
              return this.__PROXY__.removeSnapListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifySnapListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifySnapListeners");
          
              return this.__PROXY__.notifySnapListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addFocusListener");
          
              return this.__PROXY__.addFocusListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeFocusListener");
          
              return this.__PROXY__.removeFocusListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyFocusListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyFocusListeners");
          
              return this.__PROXY__.notifyFocusListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addKeyListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addKeyListener");
          
              return this.__PROXY__.addKeyListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeKeyListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeKeyListener");
          
              return this.__PROXY__.removeKeyListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyKeyListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyKeyListeners");
          
              return this.__PROXY__.notifyKeyListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addViewFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addViewFocusListener");
          
              return this.__PROXY__.addViewFocusListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeViewFocusListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeViewFocusListener");
          
              return this.__PROXY__.removeViewFocusListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyViewFocusListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyViewFocusListeners");
          
              return this.__PROXY__.notifyViewFocusListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addPreferencesListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addPreferencesListener");
          
              return this.__PROXY__.addPreferencesListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removePreferencesListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removePreferencesListener");
          
              return this.__PROXY__.removePreferencesListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyPreferencesListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyPreferencesListeners");
          
              return this.__PROXY__.notifyPreferencesListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.propertyChangeEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.propertyChangeEvent");
          
              return this.__PROXY__.propertyChangeEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addUcsListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addUcsListener");
          
              return this.__PROXY__.addUcsListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeUcsListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeUcsListener");
          
              return this.__PROXY__.removeUcsListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyUcsListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyUcsListeners");
          
              return this.__PROXY__.notifyUcsListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addLayerListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addLayerListener");
          
              return this.__PROXY__.addLayerListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeLayerListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeLayerListener");
          
              return this.__PROXY__.removeLayerListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyLayerListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyLayerListeners");
          
              return this.__PROXY__.notifyLayerListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyLayerListenersCurrentLayer = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyLayerListenersCurrentLayer");
          
              return this.__PROXY__.notifyLayerListenersCurrentLayer(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addBlockListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addBlockListener");
          
              return this.__PROXY__.addBlockListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeBlockListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeBlockListener");
          
              return this.__PROXY__.removeBlockListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyBlockListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyBlockListeners");
          
              return this.__PROXY__.notifyBlockListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyBlockListenersCurrentBlock = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyBlockListenersCurrentBlock");
          
              return this.__PROXY__.notifyBlockListenersCurrentBlock(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addViewListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addViewListener");
          
              return this.__PROXY__.addViewListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removeViewListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removeViewListener");
          
              return this.__PROXY__.removeViewListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyViewListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyViewListeners");
          
              return this.__PROXY__.notifyViewListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addPenListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addPenListener");
          
              return this.__PROXY__.addPenListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removePenListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removePenListener");
          
              return this.__PROXY__.removePenListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyPenListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyPenListeners");
          
              return this.__PROXY__.notifyPenListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.addPaletteListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.addPaletteListener");
          
              return this.__PROXY__.addPaletteListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.removePaletteListener = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.removePaletteListener");
          
              return this.__PROXY__.removePaletteListener(...args);
            
        };
        
        // function 
        RMainWindow.prototype.notifyPaletteListeners = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.notifyPaletteListeners");
          
              return this.__PROXY__.notifyPaletteListeners(...args);
            
        };
        
        // function 
        RMainWindow.prototype.ucsSetEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.ucsSetEvent");
          
              return this.__PROXY__.ucsSetEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.escapeEvent = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.escapeEvent");
          
              return this.__PROXY__.escapeEvent(...args);
            
        };
        
        // function 
        RMainWindow.prototype.setGraphicsViewCursor = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.setGraphicsViewCursor");
          
              return this.__PROXY__.setGraphicsViewCursor(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getPositionX = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getPositionX");
          
              return this.__PROXY__.getPositionX(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getPositionY = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getPositionY");
          
              return this.__PROXY__.getPositionY(...args);
            
        };
        
        // function 
        RMainWindow.prototype.resize = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        RMainWindow.prototype.move = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RMainWindow.prototype.quit = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.quit");
          
              return this.__PROXY__.quit(...args);
            
        };
        
        // function 
        RMainWindow.prototype.getChildWidget = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.getChildWidget");
          
              return this.__PROXY__.getChildWidget(...args);
            
        };
        
        // function 
        RMainWindow.prototype.handleUserMessage = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.handleUserMessage");
          
              return this.__PROXY__.handleUserMessage(...args);
            
        };
        
        // function 
        RMainWindow.prototype.handleUserInfo = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.handleUserInfo");
          
              return this.__PROXY__.handleUserInfo(...args);
            
        };
        
        // function 
        RMainWindow.prototype.handleUserWarning = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.handleUserWarning");
          
              return this.__PROXY__.handleUserWarning(...args);
            
        };
        
        // function 
        RMainWindow.prototype.handleUserCommand = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.handleUserCommand");
          
              return this.__PROXY__.handleUserCommand(...args);
            
        };
        
        // function 
        RMainWindow.prototype.setCommandPrompt = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.setCommandPrompt");
          
              return this.__PROXY__.setCommandPrompt(...args);
            
        };
        
        // function 
        RMainWindow.prototype.setLeftMouseTip = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.setLeftMouseTip");
          
              return this.__PROXY__.setLeftMouseTip(...args);
            
        };
        
        // function 
        RMainWindow.prototype.setRightMouseTip = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.setRightMouseTip");
          
              return this.__PROXY__.setRightMouseTip(...args);
            
        };
        
        // function 
        RMainWindow.prototype.eval = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.eval");
          
              return this.__PROXY__.eval(...args);
            
        };
        
        // function 
        RMainWindow.prototype.readSettings = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.readSettings");
          
              return this.__PROXY__.readSettings(...args);
            
        };
        
        // function 
        RMainWindow.prototype.writeSettings = function(...args) 
          
        {
          //print("JS: RMainWindow.prototype.writeSettings");
          
              return this.__PROXY__.writeSettings(...args);
            
        };
        

      // static functions:
      

        // static function 
        RMainWindow.getMainWindow = function() 
          
        {
          //print("JS: RMainWindow.getMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.getMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.getMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.hasMainWindow = function() 
          
        {
          //print("JS: RMainWindow.hasMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.hasMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.hasMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.installMessageHandler = function() 
          
        {
          //print("JS: RMainWindow.installMessageHandler");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.installMessageHandler(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.installMessageHandler(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.getDocumentInterfaceStatic = function() 
          
        {
          //print("JS: RMainWindow.getDocumentInterfaceStatic");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.getDocumentInterfaceStatic(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.getDocumentInterfaceStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RMainWindow.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMainWindow.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMainWindow.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMainWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMainWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMainWindow.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      