
      // auto generated
      //var self;

      // class constructor:
      function RPainterPath() {
        

        // should be RPainterPath_BaseJs.call(this, engine):
        //RPainterPath.prototype = new RPainterPath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPainterPath.getIdStatic()))) {

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
            qWarning("RPainterPath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
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

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
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

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath(): wrong number / type of arguments");
      
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

      //RPainterPath.prototype = new RPainterPath_BaseJs(engine);
      //RPainterPath.prototype = new RPainterPath_Wrapper(engine);
      RPainterPath.prototype = new Object();


      RPainterPath.prototype.toString = function() {
          //return "RPainterPath [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPainterPath [JS]";
        };
      RPainterPath.getObjectType = function() {
        return RJSType_RPainterPath.getIdStatic();
      };

      RPainterPath.prototype.getObjectType = function() {
        return RJSType_RPainterPath.getIdStatic();
      };

      RPainterPath.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPainterPath.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPainterPath.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ElementType
RPainterPath.MoveToElement = RPainterPath_Wrapper.MoveToElement;
RPainterPath.LineToElement = RPainterPath_Wrapper.LineToElement;
RPainterPath.CurveToElement = RPainterPath_Wrapper.CurveToElement;
RPainterPath.CurveToDataElement = RPainterPath_Wrapper.CurveToDataElement;


      // functions:
      
        // function 
        RPainterPath.prototype.swap = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        RPainterPath.prototype.clear = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        RPainterPath.prototype.reserve = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.reserve");
          
              return this.__PROXY__.reserve(...args);
            
        };
        
        // function 
        RPainterPath.prototype.capacity = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.capacity");
          
              return this.__PROXY__.capacity(...args);
            
        };
        
        // function 
        RPainterPath.prototype.arcMoveTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.arcMoveTo");
          
              return this.__PROXY__.arcMoveTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.arcTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.arcTo");
          
              return this.__PROXY__.arcTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.currentPosition = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.currentPosition");
          
              return this.__PROXY__.currentPosition(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addEllipse = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addEllipse");
          
              return this.__PROXY__.addEllipse(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addPolygon = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addPolygon");
          
              return this.__PROXY__.addPolygon(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addText = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addText");
          
              return this.__PROXY__.addText(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addRegion = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addRegion");
          
              return this.__PROXY__.addRegion(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addRoundedRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addRoundedRect");
          
              return this.__PROXY__.addRoundedRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.connectPath = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.connectPath");
          
              return this.__PROXY__.connectPath(...args);
            
        };
        
        // function 
        RPainterPath.prototype.contains = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
        
        // function 
        RPainterPath.prototype.intersects = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.intersects");
          
              return this.__PROXY__.intersects(...args);
            
        };
        
        // function 
        RPainterPath.prototype.translate = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
        
        // function 
        RPainterPath.prototype.translated = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.translated");
          
              return this.__PROXY__.translated(...args);
            
        };
        
        // function 
        RPainterPath.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.controlPointRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.controlPointRect");
          
              return this.__PROXY__.controlPointRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.fillRule = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.fillRule");
          
              return this.__PROXY__.fillRule(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setFillRule = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setFillRule");
          
              return this.__PROXY__.setFillRule(...args);
            
        };
        
        // function 
        RPainterPath.prototype.toReversed = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.toReversed");
          
              return this.__PROXY__.toReversed(...args);
            
        };
        
        // function 
        RPainterPath.prototype.toSubpathPolygons = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.toSubpathPolygons");
          
              return this.__PROXY__.toSubpathPolygons(...args);
            
        };
        
        // function 
        RPainterPath.prototype.toFillPolygons = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.toFillPolygons");
          
              return this.__PROXY__.toFillPolygons(...args);
            
        };
        
        // function 
        RPainterPath.prototype.toFillPolygon = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.toFillPolygon");
          
              return this.__PROXY__.toFillPolygon(...args);
            
        };
        
        // function 
        RPainterPath.prototype.elementCount = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.elementCount");
          
              return this.__PROXY__.elementCount(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setElementPositionAt = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setElementPositionAt");
          
              return this.__PROXY__.setElementPositionAt(...args);
            
        };
        
        // function 
        RPainterPath.prototype.length = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
        
        // function 
        RPainterPath.prototype.percentAtLength = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.percentAtLength");
          
              return this.__PROXY__.percentAtLength(...args);
            
        };
        
        // function 
        RPainterPath.prototype.pointAtPercent = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.pointAtPercent");
          
              return this.__PROXY__.pointAtPercent(...args);
            
        };
        
        // function 
        RPainterPath.prototype.angleAtPercent = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.angleAtPercent");
          
              return this.__PROXY__.angleAtPercent(...args);
            
        };
        
        // function 
        RPainterPath.prototype.slopeAtPercent = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.slopeAtPercent");
          
              return this.__PROXY__.slopeAtPercent(...args);
            
        };
        
        // function 
        RPainterPath.prototype.united = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.united");
          
              return this.__PROXY__.united(...args);
            
        };
        
        // function 
        RPainterPath.prototype.intersected = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.intersected");
          
              return this.__PROXY__.intersected(...args);
            
        };
        
        // function 
        RPainterPath.prototype.subtracted = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.subtracted");
          
              return this.__PROXY__.subtracted(...args);
            
        };
        
        // function 
        RPainterPath.prototype.simplified = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.simplified");
          
              return this.__PROXY__.simplified(...args);
            
        };
        
        // function 
        RPainterPath.prototype.ensureData = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.ensureData");
          
              return this.__PROXY__.ensureData(...args);
            
        };
        
        // function 
        RPainterPath.prototype.ensureData_helper = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.ensureData_helper");
          
              return this.__PROXY__.ensureData_helper(...args);
            
        };
        
        // function 
        RPainterPath.prototype.detach = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.detach");
          
              return this.__PROXY__.detach(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setDirty = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setDirty");
          
              return this.__PROXY__.setDirty(...args);
            
        };
        
        // function 
        RPainterPath.prototype.computeBoundingRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.computeBoundingRect");
          
              return this.__PROXY__.computeBoundingRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.computeControlPointRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.computeControlPointRect");
          
              return this.__PROXY__.computeControlPointRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.d_func = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.d_func");
          
              return this.__PROXY__.d_func(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPath = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPath");
          
              return this.__PROXY__.setPath(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getShapes");
          
              return this.__PROXY__.getShapes(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getCurrentPosition = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getCurrentPosition");
          
              return this.__PROXY__.getCurrentPosition(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isAtPosition = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isAtPosition");
          
              return this.__PROXY__.isAtPosition(...args);
            
        };
        
        // function 
        RPainterPath.prototype.moveTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.moveTo");
          
              return this.__PROXY__.moveTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.moveToOrNop = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.moveToOrNop");
          
              return this.__PROXY__.moveToOrNop(...args);
            
        };
        
        // function 
        RPainterPath.prototype.lineTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.lineTo");
          
              return this.__PROXY__.lineTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.quadTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.quadTo");
          
              return this.__PROXY__.quadTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.cubicTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.cubicTo");
          
              return this.__PROXY__.cubicTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.closeSubpath = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.closeSubpath");
          
              return this.__PROXY__.closeSubpath(...args);
            
        };
        
        // function 
        RPainterPath.prototype.containsPoint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.containsPoint");
          
              return this.__PROXY__.containsPoint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addPolyline = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addPolyline");
          
              return this.__PROXY__.addPolyline(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addPath = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addPath");
          
              return this.__PROXY__.addPath(...args);
            
        };
        
        // function 
        RPainterPath.prototype.appendPath = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.appendPath");
          
              return this.__PROXY__.appendPath(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addLine = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addLine");
          
              return this.__PROXY__.addLine(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addArc = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addArc");
          
              return this.__PROXY__.addArc(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addSpline = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addSpline");
          
              return this.__PROXY__.addSpline(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addRect = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addRect");
          
              return this.__PROXY__.addRect(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addBox = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addBox");
          
              return this.__PROXY__.addBox(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getStartPoint");
          
              return this.__PROXY__.getStartPoint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getEndPoint");
          
              return this.__PROXY__.getEndPoint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setValid = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setValid");
          
              return this.__PROXY__.setValid(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isSane");
          
              return this.__PROXY__.isSane(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getZLevel = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getZLevel");
          
              return this.__PROXY__.getZLevel(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setZLevel = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setZLevel");
          
              return this.__PROXY__.setZLevel(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPen");
          
              return this.__PROXY__.getPen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getBrush = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getBrush");
          
              return this.__PROXY__.getBrush(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setBrush = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setMode = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setMode");
          
              return this.__PROXY__.setMode(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getMode = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getMode");
          
              return this.__PROXY__.getMode(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setHighlighted");
          
              return this.__PROXY__.setHighlighted(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isHighlighted = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isHighlighted");
          
              return this.__PROXY__.isHighlighted(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setSelected");
          
              return this.__PROXY__.setSelected(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setFixedPenColor = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setFixedPenColor");
          
              return this.__PROXY__.setFixedPenColor(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isFixedPenColor = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isFixedPenColor");
          
              return this.__PROXY__.isFixedPenColor(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setFixedBrushColor = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setFixedBrushColor");
          
              return this.__PROXY__.setFixedBrushColor(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isFixedBrushColor = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isFixedBrushColor");
          
              return this.__PROXY__.isFixedBrushColor(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setAutoRegen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setAutoRegen");
          
              return this.__PROXY__.setAutoRegen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getAutoRegen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getAutoRegen");
          
              return this.__PROXY__.getAutoRegen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setAlwaysRegen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setAlwaysRegen");
          
              return this.__PROXY__.setAlwaysRegen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getAlwaysRegen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getAlwaysRegen");
          
              return this.__PROXY__.getAlwaysRegen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setInheritPen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setInheritPen");
          
              return this.__PROXY__.setInheritPen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getInheritPen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getInheritPen");
          
              return this.__PROXY__.getInheritPen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPixelUnit");
          
              return this.__PROXY__.setPixelUnit(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPixelUnit = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPixelUnit");
          
              return this.__PROXY__.getPixelUnit(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setNoClipping = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setNoClipping");
          
              return this.__PROXY__.setNoClipping(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getNoClipping = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getNoClipping");
          
              return this.__PROXY__.getNoClipping(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setNoColorMode = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setNoColorMode");
          
              return this.__PROXY__.setNoColorMode(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getNoColorMode = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getNoColorMode");
          
              return this.__PROXY__.getNoColorMode(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setSimplePointDisplay = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setSimplePointDisplay");
          
              return this.__PROXY__.setSimplePointDisplay(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getSimplePointDisplay = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getSimplePointDisplay");
          
              return this.__PROXY__.getSimplePointDisplay(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPolylineGen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPolylineGen");
          
              return this.__PROXY__.setPolylineGen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPolylineGen = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPolylineGen");
          
              return this.__PROXY__.getPolylineGen(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setNoPattern = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setNoPattern");
          
              return this.__PROXY__.setNoPattern(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getNoPattern = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getNoPattern");
          
              return this.__PROXY__.getNoPattern(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setScreenBasedLinetype = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setScreenBasedLinetype");
          
              return this.__PROXY__.setScreenBasedLinetype(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getScreenBasedLinetype = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getScreenBasedLinetype");
          
              return this.__PROXY__.getScreenBasedLinetype(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPixelWidth = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPixelWidth");
          
              return this.__PROXY__.setPixelWidth(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPixelWidth");
          
              return this.__PROXY__.getPixelWidth(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setFeatureSize = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setFeatureSize");
          
              return this.__PROXY__.setFeatureSize(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getFeatureSize = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getFeatureSize");
          
              return this.__PROXY__.getFeatureSize(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPixelSizeHint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPixelSizeHint");
          
              return this.__PROXY__.setPixelSizeHint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPixelSizeHint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPixelSizeHint");
          
              return this.__PROXY__.getPixelSizeHint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getDistanceTo");
          
              return this.__PROXY__.getDistanceTo(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addPoint = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addPoint");
          
              return this.__PROXY__.addPoint(...args);
            
        };
        
        // function 
        RPainterPath.prototype.hasPoints = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.hasPoints");
          
              return this.__PROXY__.hasPoints(...args);
            
        };
        
        // function 
        RPainterPath.prototype.setPoints = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.setPoints");
          
              return this.__PROXY__.setPoints(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getPoints = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getPoints");
          
              return this.__PROXY__.getPoints(...args);
            
        };
        
        // function 
        RPainterPath.prototype.transform = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.transform");
          
              return this.__PROXY__.transform(...args);
            
        };
        
        // function 
        RPainterPath.prototype.move = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RPainterPath.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
        
        // function 
        RPainterPath.prototype.scale = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getElementCount = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getElementCount");
          
              return this.__PROXY__.getElementCount(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getXAt = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getXAt");
          
              return this.__PROXY__.getXAt(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getYAt = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getYAt");
          
              return this.__PROXY__.getYAt(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getTypeAt = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getTypeAt");
          
              return this.__PROXY__.getTypeAt(...args);
            
        };
        
        // function 
        RPainterPath.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addShape = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addShape");
          
              return this.__PROXY__.addShape(...args);
            
        };
        
        // function 
        RPainterPath.prototype.addOriginalShape = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.addOriginalShape");
          
              return this.__PROXY__.addOriginalShape(...args);
            
        };
        
        // function 
        RPainterPath.prototype.hasOriginalShapes = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.hasOriginalShapes");
          
              return this.__PROXY__.hasOriginalShapes(...args);
            
        };
        
        // function 
        RPainterPath.prototype.countOriginalShapes = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.countOriginalShapes");
          
              return this.__PROXY__.countOriginalShapes(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getOriginalShape = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getOriginalShape");
          
              return this.__PROXY__.getOriginalShape(...args);
            
        };
        
        // function 
        RPainterPath.prototype.copy = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        RPainterPath.prototype.rotateList = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.rotateList");
          
              return this.__PROXY__.rotateList(...args);
            
        };
        
        // function 
        RPainterPath.prototype.translateList = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.translateList");
          
              return this.__PROXY__.translateList(...args);
            
        };
        
        // function 
        RPainterPath.prototype.scaleList = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.scaleList");
          
              return this.__PROXY__.scaleList(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getMinList = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getMinList");
          
              return this.__PROXY__.getMinList(...args);
            
        };
        
        // function 
        RPainterPath.prototype.getMaxList = function(...args) 
          
        {
          //print("JS: RPainterPath.prototype.getMaxList");
          
              return this.__PROXY__.getMaxList(...args);
            
        };
        

      // static functions:
      

        // static function 
        RPainterPath.rotateList = function() 
          
        {
          //print("JS: RPainterPath.rotateList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.rotateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.translateList = function() 
          
        {
          //print("JS: RPainterPath.translateList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.translateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.translateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.scaleList = function() 
          
        {
          //print("JS: RPainterPath.scaleList");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.scaleList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.getMinList = function() 
          
        {
          //print("JS: RPainterPath.getMinList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.getMinList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.getMinList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.getMaxList = function() 
          
        {
          //print("JS: RPainterPath.getMaxList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.getMaxList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.getMaxList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RPainterPath.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPainterPath.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPainterPath.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPainterPath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPainterPath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPainterPath.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      