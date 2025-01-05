

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef RFILEEXPORTERADAPTER_H_BASE
  #define RFILEEXPORTERADAPTER_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      
    #include <QQmlEngine>

    
        #include "RFileExporterAdapter.h"
      
    // Base class for RFileExporterAdapter
      class RFileExporterAdapter_Base : public RFileExporterAdapter {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: RFileExporterAdapter
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
RFileExporterAdapter_Base
        
      (

        
          RJSApi& _h
          
            ,
          RDocument& document, RMessageHandler* messageHandler=NULL, RProgressHandler* progressHandler=NULL
      )
      
        : RFileExporterAdapter(
          document, messageHandler, progressHandler
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: RFileExporterAdapter
  // Function: 
  // Parameters: 0
  // preceding Parameters: 3
RFileExporterAdapter_Base
        
      (

        
          RJSApi& _h
          
      )
      
        : RFileExporterAdapter(
          
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~RFileExporterAdapter_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual RDocument& getDocument(
      
    )
    
      const
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual RDocument& getDocumentSup(
        
      )
      
        const
      
      {
        
          return
        RFileExporterAdapter::getDocument(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setColor(
      float r, float g, float b, float a=1.0f
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setColorSup(
        float r, float g, float b, float a=1.0f
      )
      
      {
        RFileExporterAdapter::setColor(
          r, g, b, a
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setColor(
      const RColor& color
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setColorSup(
        const RColor& color
      )
      
      {
        RFileExporterAdapter::setColor(
          color
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void setLineweight(
      RLineweight::Lineweight weight
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void setLineweightSup(
        RLineweight::Lineweight weight
      )
      
      {
        RFileExporterAdapter::setLineweight(
          weight
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void startExport(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void startExportSup(
        
      )
      
      {
        RFileExporterAdapter::startExport(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void endExport(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void endExportSup(
        
      )
      
      {
        RFileExporterAdapter::endExport(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportBlock(
      QSharedPointer<RBlock> a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportBlockSup(
        QSharedPointer<RBlock> a1
      )
      
      {
        RFileExporterAdapter::exportBlock(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportBlock(
      RBlock::Id blockId
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportBlockSup(
        RBlock::Id blockId
      )
      
      {
        RFileExporterAdapter::exportBlock(
          blockId
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportEntities(
      bool allBlocks=true, bool undone=false, bool invisible=false
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportEntitiesSup(
        bool allBlocks=true, bool undone=false, bool invisible=false
      )
      
      {
        RFileExporterAdapter::exportEntities(
          allBlocks, undone, invisible
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void endEntity(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void endEntitySup(
        
      )
      
      {
        RFileExporterAdapter::endEntity(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportCurrentEntity(
      bool preview=false, bool forceSelected=false
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportCurrentEntitySup(
        bool preview=false, bool forceSelected=false
      )
      
      {
        RFileExporterAdapter::exportCurrentEntity(
          preview, forceSelected
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportShape(
      QSharedPointer<RShape> shape
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportShapeSup(
        QSharedPointer<RShape> shape
      )
      
      {
        RFileExporterAdapter::exportShape(
          shape
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual double exportLine(
      const RLine& line, double offset=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual double exportLineSup(
        const RLine& line, double offset=RNANDOUBLE
      )
      
      {
        
          return
        RFileExporterAdapter::exportLine(
          line, offset
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportCircle(
      const RCircle& circle
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportCircleSup(
        const RCircle& circle
      )
      
      {
        RFileExporterAdapter::exportCircle(
          circle
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportArc(
      const RArc& arc, double offset=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportArcSup(
        const RArc& arc, double offset=RNANDOUBLE
      )
      
      {
        RFileExporterAdapter::exportArc(
          arc, offset
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportEllipse(
      const REllipse& ellipse, double offset=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportEllipseSup(
        const REllipse& ellipse, double offset=RNANDOUBLE
      )
      
      {
        RFileExporterAdapter::exportEllipse(
          ellipse, offset
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportPolyline(
      const RPolyline& polyline, bool polylineGen=true, double offset=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportPolylineSup(
        const RPolyline& polyline, bool polylineGen=true, double offset=RNANDOUBLE
      )
      
      {
        RFileExporterAdapter::exportPolyline(
          polyline, polylineGen, offset
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportSpline(
      const RSpline& spline, double offset=RNANDOUBLE
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportSplineSup(
        const RSpline& spline, double offset=RNANDOUBLE
      )
      
      {
        RFileExporterAdapter::exportSpline(
          spline, offset
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportPainterPaths(
      const QList<RPainterPath>& paths, double z=0.0
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportPainterPathsSup(
        const QList<RPainterPath>& paths, double z=0.0
      )
      
      {
        RFileExporterAdapter::exportPainterPaths(
          paths, z
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportImage(
      const RImageData& image, bool forceSelected=false
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportImageSup(
        const RImageData& image, bool forceSelected=false
      )
      
      {
        RFileExporterAdapter::exportImage(
          image, forceSelected
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QList<RPainterPath> exportText(
      const RTextBasedData& text, bool forceSelected=false
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual QList<RPainterPath> exportTextSup(
        const RTextBasedData& text, bool forceSelected=false
      )
      
      {
        
          return
        RFileExporterAdapter::exportText(
          text, forceSelected
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportTransform(
      const RTransform& t
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportTransformSup(
        const RTransform& t
      )
      
      {
        RFileExporterAdapter::exportTransform(
          t
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportEndTransform(
      
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportEndTransformSup(
        
      )
      
      {
        RFileExporterAdapter::exportEndTransform(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool isTextRenderedAsText(
      
    )
    
      const
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool isTextRenderedAsTextSup(
        
      )
      
        const
      
      {
        
          return
        RFileExporterAdapter::isTextRenderedAsText(
          
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual QString getCorrectedFileName(
      const QString& fileName, const QString& nameFilter
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual QString getCorrectedFileNameSup(
        const QString& fileName, const QString& nameFilter
      )
      
      {
        
          return
        RFileExporterAdapter::getCorrectedFileName(
          fileName, nameFilter
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual bool exportFile(
      const QString& fileName, const QString& nameFilter, bool setFileName=true
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual bool exportFileSup(
        const QString& fileName, const QString& nameFilter, bool setFileName=true
      )
      
      {
        
          return
        RFileExporterAdapter::exportFile(
          fileName, nameFilter, setFileName
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportPoint(
      const RPoint& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportPointSup(
        const RPoint& a1
      )
      
      {
        RFileExporterAdapter::exportPoint(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportArcSegment(
      const RArc& a1, bool a2
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportArcSegmentSup(
        const RArc& a1, bool a2
      )
      
      {
        RFileExporterAdapter::exportArcSegment(
          a1, a2
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportLineSegment(
      const RLine& a1, double a2
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportLineSegmentSup(
        const RLine& a1, double a2
      )
      
      {
        RFileExporterAdapter::exportLineSegment(
          a1, a2
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportTriangle(
      const RTriangle& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportTriangleSup(
        const RTriangle& a1
      )
      
      {
        RFileExporterAdapter::exportTriangle(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual void exportXLine(
      const RXLine& a1
    )
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual void exportXLineSup(
        const RXLine& a1
      )
      
      {
        RFileExporterAdapter::exportXLine(
          a1
        );
      }
    
    public:
    // implementation of virtual public function
    // calls JS implementation if available
    virtual double getLineTypePatternScale(
      const RLinetypePattern& p
    )
    
      const
    
    ;

    
      // implementation of virtual public function
      // always calls super implementation
      virtual double getLineTypePatternScaleSup(
        const RLinetypePattern& p
      )
      
        const
      
      {
        
          return
        RFileExporterAdapter::getLineTypePatternScale(
          p
        );
      }
    

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  