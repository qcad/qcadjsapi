
  // Auto generated
  
    #ifndef RGRAPHICSSCENEQT_H_WRAPPER
    #define RGRAPHICSSCENEQT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RGraphicsViewImage.h"
      
        #include "RTriangle.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RGraphicsSceneQt.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RGraphicsSceneQt
    class QCADJSAPI_EXPORT 
     RGraphicsSceneQt_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RGraphicsSceneQt_Wrapper(const RGraphicsSceneQt_Wrapper&);

    public:
      // initialization of RGraphicsSceneQt:
      static void init(RJSApi& handler);

      
        static RGraphicsSceneQt* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RGraphicsSceneQt:
          for (int i=0; i<basecasters_RGraphicsSceneQt.length(); i++) {
            RJSBasecaster_RGraphicsSceneQt* basecaster = basecasters_RGraphicsSceneQt[i];
            RGraphicsSceneQt* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RGraphicsSceneQt:
          if (t==RJSType_RGraphicsSceneQt::getIdStatic()) {
            return (RGraphicsSceneQt*)vp;
          }

          qWarning() << "RGraphicsSceneQt_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RGraphicsSceneQt* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RGraphicsSceneQt*: wrapper wraps NULL";
          }

          RGraphicsSceneQt* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RGraphicsSceneQt*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RGraphicsSceneQt_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RGraphicsSceneQt_Wrapper(RJSApi& h, RGraphicsSceneQt* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RGraphicsSceneQt_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RGraphicsSceneQt
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RGraphicsSceneQt_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RGraphicsSceneQt
    // Function: getErrorMessage
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getErrorMessage
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setLayerSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayerSource
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setBlockSource
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlockSource
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      getDocumentSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProjectionRenderingHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getProjectionRenderingHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getProjectionRenderingHint
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setClipping
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setClipping
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getClipping
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClipping
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getPen
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getBrush
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBrush
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getColor
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setEntityAttributes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEntityAttributes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setBrushStyle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBrushStyle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setColor
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setColorSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setLineweight
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setLineweightSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setLinetypeId
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypeId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypePattern
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getLinetypePattern
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypePattern
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getBlockRefOrEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockRefOrEntity
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getBlockRefOrEntityId
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockRefOrEntityId
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntity
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentBlockRef
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCurrentBlockRef
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentViewport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCurrentViewport
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isEntitySelected
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEntitySelected
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isPatternContinuous
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPatternContinuous
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: startExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startExportSuper
                    
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: endExport
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endExportSuper
                    
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportDocument
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportDocument
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportDocumentSetting
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportDocumentSetting
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLayers
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLayers
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLayerStates
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLayerStates
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportBlocks
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportBlocks
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportViews
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportViews
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLinetypes
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLayer
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLayerState
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLayerState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportBlock
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportBlockSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportView
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportView
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetype
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLinetype
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEntity
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getEntityLayer
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityLayer
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isVisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: endEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endEntitySuper
                    
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportShapes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportShape
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportShapeSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportShapeSegment
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportShapeSegment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLinetypeShape
    // Source: RExporter
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLinetypeShape
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    , 
  const QJSValue& 
  a6
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportCircle
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportCircleSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEllipse
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportEllipseSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportSplineSegment
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportSplineSegment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportExplodable
    // Source: RExporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportExplodable
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportBoundingBoxPaths
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportBoundingBoxPaths
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportQuad
    // Source: RExporter
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportQuad
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportVerticalQuad
    // Source: RExporter
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportVerticalQuad
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportBox
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isTextRenderedAsText
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      isTextRenderedAsTextSuper
                    
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: pushEntity
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pushEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: popEntity
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  popEntity
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDraftMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: toggleDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toggleDraftMode
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getDraftMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDraftMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTwoColorSelectedMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getTwoColorSelectedMode
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTwoColorSelectedMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScreenBasedLinetypes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: toggleScreenBasedLinetypes
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toggleScreenBasedLinetypes
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisualExporter
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setVisualExporter
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisualExporter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExportInvisible
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setExportInvisible
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExportInvisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPixelSizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getCurrentPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCurrentPixelSizeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setPixelSizeHint
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelSizeHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPixelUnit
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setPixelUnit
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelUnit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPixelWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setPixelWidth
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixelWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setEnablePatterns
    // Source: RExporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnablePatterns
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getDocumentInterface
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDocumentInterface
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getGraphicsViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsViews
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportDocumentSettings
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportDocumentSettings
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: regenerate
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  regenerate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: regenerateViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  regenerateViews
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: repaintViews
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  repaintViews
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: setCursor
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleTerminateEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleTerminateEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleKeyPressEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleKeyPressEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleKeyReleaseEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleKeyReleaseEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseMoveEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleMouseMoveEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleMousePressEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleMousePressEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseReleaseEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleMouseReleaseEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleMouseDoubleClickEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleMouseDoubleClickEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleWheelEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleWheelEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleTabletEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleTabletEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handleSwipeGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handleSwipeGestureEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handlePanGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handlePanGestureEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: handlePinchGestureEvent
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handlePinchGestureEvent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: registerView
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  registerView
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: unregisterView
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unregisterView
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: beginPreview
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beginPreview
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: endPreview
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endPreview
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: isPreviewEmpty
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPreviewEmpty
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: beginNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beginNoColorMode
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: endNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endNoColorMode
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getNoColorMode
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getNoColorMode
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getHighlightedReferencePoint
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHighlightedReferencePoint
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: highlightReferencePoint
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  highlightReferencePoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: selectReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  selectReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportCurrentEntity
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      exportCurrentEntitySuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: countReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  countReferencePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: hasSelectedReferencePoints
    // Source: RGraphicsScene
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasSelectedReferencePoints
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getGraphicsView
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getGraphicsView
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: updateSelectionStatus
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateSelectionStatus
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: clearPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearPreview
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEntities
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntities
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEntitiesThread
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntitiesThread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEntityThread
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEntityThread
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: beginPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  beginPath
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: endPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endPath
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: transformAndApplyPatternPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformAndApplyPatternPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: unexportEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unexportEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportPoint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLine
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLine
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportArc
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportArc
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportThickPolyline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportThickPolyline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportPolyline
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportPolyline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportPolylineFill
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportPolylineFill
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportSpline
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportSpline
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportArcSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportArcSegment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportLineSegment
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportLineSegment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportXLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportXLine
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportRay
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportRay
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportTriangle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportTriangle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportRectangle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportPainterPaths
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportPainterPaths
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportImage
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportText
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportClipRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportClipRectangle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportTransform
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportTransform
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: exportEndTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exportEndTransform
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getLineTypePatternScale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineTypePatternScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: highlightEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  highlightEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: deleteDrawables
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteDrawables
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getDrawablesList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDrawablesList
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: hasPreview
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPreview
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getPreviewEntityIds
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPreviewEntityIds
              (

                
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: addToPreview
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addToPreview
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: addTextToPreview
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addTextToPreview
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: hasClipRectangleFor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasClipRectangleFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getClipRectangle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClipRectangle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: addDrawable
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addDrawable
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: getScreenBasedLinetypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getScreenBasedLinetypes
              (

                
              )
              
                const
              
              ;
            
    // Class: RGraphicsSceneQt
    // Function: dump
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dump
              (

                
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_RGraphicsSceneQt::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RGraphicsSceneQt* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RGraphicsSceneQt* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        RGraphicsSceneQt* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RGraphicsSceneQt*> basecasters_RGraphicsSceneQt;

      public:
        static void registerBasecaster_RGraphicsSceneQt(RJSBasecaster_RGraphicsSceneQt* bc) {
          basecasters_RGraphicsSceneQt.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RGraphicsSceneQt_Wrapper*)

    Q_DECLARE_INTERFACE(RGraphicsSceneQt_Wrapper, "org.qcad.RGraphicsSceneQt_Wrapper")

  
  #endif
  
