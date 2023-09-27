
  // Auto generated
  
    #ifndef RDIMANGULAR3PDATA_H_WRAPPER
    #define RDIMANGULAR3PDATA_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RDimAngular3PData.h"
      
      // singleton class wrapper for static functions:
      class RDimAngular3PData_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      RDimAngular3PData_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: RDimAngular3PData
    // Function: getDefaultDrawOrder
    // Source: REntityData
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDefaultDrawOrder
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static RDimAngular3PData_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RDimAngular3PData
    class RDimAngular3PData_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RDimAngular3PData_Wrapper(const RDimAngular3PData_Wrapper&);

    public:
      // initialization of RDimAngular3PData:
      static void init(RJSApi& handler);

      
        static RDimAngular3PData* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_RDimAngular3PData.length(); i++) {
            RJSBasecaster_RDimAngular3PData* basecaster = basecasters_RDimAngular3PData[i];
            RDimAngular3PData* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_RDimAngular3PData::getIdStatic()) {
            return (RDimAngular3PData*)vp;
          }

          qWarning() << "RDimAngular3PData_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RDimAngular3PData* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RDimAngular3PData*: wrapper wraps NULL";
          }

          RDimAngular3PData* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RDimAngular3PData*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RDimAngular3PData_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RDimAngular3PData_Wrapper(RJSApi& h, RDimAngular3PData* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RDimAngular3PData_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RDimAngular3PData
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RDimAngular3PData_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
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
            

    // non-static functions:
    
    // Class: RDimAngular3PData
    // Function: getDocument
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDocument
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDocument
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDocument
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isPointType
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPointType
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getClosestSubEntityId
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestSubEntityId
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getClosestShape
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestShape
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: copyAttributesFrom
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  copyAttributesFrom
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
            
    // Class: RDimAngular3PData
    // Function: setZ
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setZ
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getBoundingBoxes
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBoxes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getHull
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHull
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUpdatesEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setUpdatesEnabled
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpdatesEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: cloneOnChange
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cloneOnChange
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isSelected
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelected
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setSelected
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSelectedWorkingSet
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setSelectedWorkingSet
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSelectedWorkingSet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDrawOrder
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDrawOrder
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDrawOrder
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayerId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLayerId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLayerId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLayerName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLayerName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLayerName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlockId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getBlockId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setParentId
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParentId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getParentId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getParentId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getBlockName
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBlockName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLinetypeId
    // Source: REntityData
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
            
    // Class: RDimAngular3PData
    // Function: getLinetypeId
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypeId
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLinetypePattern
    // Source: REntityData
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
            
    // Class: RDimAngular3PData
    // Function: getLinetypePattern
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypePattern
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinetypeScale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLinetypeScale
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinetypeScale
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineweight
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLineweight
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLineweight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setColor
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getColor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDisplayColor
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDisplayColor
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getInternalReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getInternalReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getEndPoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEndPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getMiddlePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMiddlePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getCenterPoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenterPoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getArcReferencePoints
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getArcReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getPointsWithDistanceToEnd
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointsWithDistanceToEnd
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getClosestPointOnEntity
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getClosestPointOnEntity
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getIntersectionPoints
    // Source: REntityData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntersectionPoints
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
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getVectorTo
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVectorTo
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isInside
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInside
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isOnEntity
    // Source: REntityData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOnEntity
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: flipHorizontal
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipHorizontal
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: flipVertical
    // Source: REntityData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flipVertical
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: stretch
    // Source: REntityData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  stretch
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
            
    // Class: RDimAngular3PData
    // Function: setAutoUpdatesBlocked
    // Source: REntityData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAutoUpdatesBlocked
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getBoundingBox
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: render
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  render
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateBoundingBox
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateBoundingBox
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateTextPositionCenter
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateTextPositionCenter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateTextPositionSide
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateTextPositionSide
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateTextData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateShapes
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateShapes
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateArrowPos1
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateArrowPos1
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: updateArrowPos2
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  updateArrowPos2
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: clearStyleOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clearStyleOverrides
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getShapes
    // Source: RDimensionData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getShapes
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getPointOnEntity
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPointOnEntity
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDefinitionPoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefinitionPoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDefinitionPoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDefinitionPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setText
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getText
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getText
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setUpperTolerance
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUpperTolerance
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLowerTolerance
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLowerTolerance
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setFontName
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFontName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getFontName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFontName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimBlockName
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimBlockName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimBlockName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimBlockName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: hasOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasOverrides
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: hasOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getOverrides
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getOverrides
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimXVariant
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimXVariant
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
            
    // Class: RDimAngular3PData
    // Function: setDimXDouble
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimXDouble
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
            
    // Class: RDimAngular3PData
    // Function: setDimXInt
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimXInt
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
            
    // Class: RDimAngular3PData
    // Function: setDimXBool
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimXBool
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
            
    // Class: RDimAngular3PData
    // Function: setDimXColor
    // Source: RDimensionData
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimXColor
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
            
    // Class: RDimAngular3PData
    // Function: getDimXVariant
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimXVariant
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getVariantOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getVariantOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimXDouble
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimXDouble
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDoubleOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDoubleOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimXInt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimXInt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getIntOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getIntOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimXBool
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimXBool
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getBoolOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoolOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimXColor
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimXColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getColorOverride
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getColorOverride
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimlfac
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimlfac
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimlfac
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimlfac
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLinearFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLinearFactor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setLinearFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLinearFactor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimscale
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimscale
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimscale
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimscale
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isArrow1Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isArrow1Flipped
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setArrow1Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setArrow1Flipped
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isArrow2Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isArrow2Flipped
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setArrow2Flipped
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setArrow2Flipped
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isExtLineFix
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isExtLineFix
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setExtLineFix
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtLineFix
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getExtLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtLineFixLength
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setExtLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtLineFixLength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: adjustExtensionLineFixLength
    // Source: RDimensionData
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  adjustExtensionLineFixLength
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
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: hasSpaceForArrows
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasSpaceForArrows
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDistanceTo
    // Source: RDimensionData
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDistanceTo
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
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: intersectsWith
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  intersectsWith
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: clickReferencePoint
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clickReferencePoint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: scaleVisualProperties
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scaleVisualProperties
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimexo
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimexo
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimexo
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimexo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimexe
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimexe
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimexe
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimexe
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimasz
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimasz
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimasz
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimasz
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimdli
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimdli
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimdli
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimdli
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimgap
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimgap
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimgap
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimgap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimtxt
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimtxt
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimtxt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimtxt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimlunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimlunit
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimlunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimlunit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimjust
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimjust
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimtad
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimtad
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimtad
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimtad
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimtih
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimtih
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimtih
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimtih
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimtsz
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimtsz
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimtsz
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimtsz
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimzin
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimzin
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimzin
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimzin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimaunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimaunit
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimaunit
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimaunit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimadec
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimadec
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimadec
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimadec
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimdec
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimdec
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimdec
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimdec
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimazin
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimazin
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimazin
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimazin
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimdsep
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimdsep
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimdsep
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimdsep
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimclrt
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimclrt
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimclrt
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimclrt
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: useArchTick
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  useArchTick
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimblk
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimblk
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimblkName
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimblkName
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isDimXScaled
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDimXScaled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: hasCustomTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasCustomTextPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setCustomTextPosition
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCustomTextPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLineSpacingStyle
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingStyle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getLineSpacingFactor
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLineSpacingFactor
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getTextAngle
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTextData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: initTextData
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  initTextData
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getMeasurement
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMeasurement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: formatLabel
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  formatLabel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: formatAngleLabel
    // Source: RDimensionData
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  formatAngleLabel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: update
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimensionBlockReference
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimensionBlockReference
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: hasDimensionBlockReference
    // Source: RDimensionData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasDimensionBlockReference
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getAngle
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngle
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getMeasuredValue
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getMeasuredValue
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getAutoLabel
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAutoLabel
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimensionArc
    // Source: RDimAngularData
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimensionArc
              (

                
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getType
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: isSane
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSane
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getCenter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCenter
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCenter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setExtensionLine1End
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtensionLine1End
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getExtensionLine1End
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtensionLine1End
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setExtensionLine2End
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setExtensionLine2End
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getExtensionLine2End
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getExtensionLine2End
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: setDimArcPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDimArcPosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getDimArcPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getDimArcPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getReferencePoints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getReferencePoints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: moveReferencePoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  moveReferencePoint
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
            
    // Class: RDimAngular3PData
    // Function: move
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  move
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotate
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
            
    // Class: RDimAngular3PData
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scale
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
            
    // Class: RDimAngular3PData
    // Function: mirror
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mirror
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RDimAngular3PData
    // Function: getAngles
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getAngles
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
    
              )
              
                const
              
              ;
            
    // Class: RDimAngular3PData
    // Function: to2D
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  to2D
              (

                
              )
              
              ;
            

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
          return RJSType_RDimAngular3PData::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RDimAngular3PData* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RDimAngular3PData* getWrapped() const {
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
        RDimAngular3PData* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RDimAngular3PData*> basecasters_RDimAngular3PData;

      public:
        static void registerBasecaster_RDimAngular3PData(RJSBasecaster_RDimAngular3PData* bc) {
          basecasters_RDimAngular3PData.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RDimAngular3PData_Wrapper*)

    Q_DECLARE_INTERFACE(RDimAngular3PData_Wrapper, "org.qcad.RDimAngular3PData_Wrapper")

  
  #endif
  
