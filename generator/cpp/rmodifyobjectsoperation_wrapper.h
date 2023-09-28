
  // Auto generated
  
    #ifndef RMODIFYOBJECTSOPERATION_H_WRAPPER
    #define RMODIFYOBJECTSOPERATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RModifyObjectsOperation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RModifyObjectsOperation
    class RModifyObjectsOperation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RModifyObjectsOperation_Wrapper(const RModifyObjectsOperation_Wrapper&);

    public:
      // initialization of RModifyObjectsOperation:
      static void init(RJSApi& handler);

      
        static RModifyObjectsOperation* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RModifyObjectsOperation:
          for (int i=0; i<basecasters_RModifyObjectsOperation.length(); i++) {
            RJSBasecaster_RModifyObjectsOperation* basecaster = basecasters_RModifyObjectsOperation[i];
            RModifyObjectsOperation* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RModifyObjectsOperation:
          if (t==RJSType_RModifyObjectsOperation::getIdStatic()) {
            return (RModifyObjectsOperation*)vp;
          }

          qWarning() << "RModifyObjectsOperation_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RModifyObjectsOperation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RModifyObjectsOperation*: wrapper wraps NULL";
          }

          RModifyObjectsOperation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RModifyObjectsOperation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Flag {
    NoFlags = RModifyObjectsOperation::NoFlags,
UseAttributes = RModifyObjectsOperation::UseAttributes,
ForceNew = RModifyObjectsOperation::ForceNew,
GeometryOnly = RModifyObjectsOperation::GeometryOnly,
Delete = RModifyObjectsOperation::Delete,

  };
  Q_ENUM(Flag)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RModifyObjectsOperation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RModifyObjectsOperation_Wrapper(RJSApi& h, RModifyObjectsOperation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RModifyObjectsOperation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RModifyObjectsOperation
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RModifyObjectsOperation_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RModifyObjectsOperation
    // Function: getEntityTypeFilter
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getEntityTypeFilter
              (

                
              )
              
                const
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setRecordAffectedObjects
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRecordAffectedObjects
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setSpatialIndexDisabled
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSpatialIndexDisabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setAllowInvisible
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowInvisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setAllowAll
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowAll
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setKeepChildren
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeepChildren
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransactionGroup
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: getTransactionGroup
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionGroup
              (

                
              )
              
                const
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setText
    // Source: ROperation
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
            
    // Class: RModifyObjectsOperation
    // Function: getText
    // Source: ROperation
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
            
    // Class: RModifyObjectsOperation
    // Function: getTransactionTypes
    // Source: ROperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionTypes
              (

                
              )
              
                const
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransactionType
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
            
    // Class: RModifyObjectsOperation
    // Function: getTransactionType
    // Source: ROperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransactionType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: replaceObject
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  replaceObject
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
            
    // Class: RModifyObjectsOperation
    // Function: getObject
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getObject
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: endCycle
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endCycle
              (

                
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: addObject
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addObject
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
            
    // Class: RModifyObjectsOperation
    // Function: deleteObject
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteObject
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: apply
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  apply
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
            
    // Class: RModifyObjectsOperation
    // Function: getPreviewCounter
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getPreviewCounter
              (

                
              )
              
                const
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: setLimitPreview
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLimitPreview
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: isEmpty
    // Source: RAddObjectsOperation
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
              ;
            
    // Class: RModifyObjectsOperation
    // Function: transformSelection
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transformSelection
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
          return RJSType_RModifyObjectsOperation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RModifyObjectsOperation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RModifyObjectsOperation* getWrapped() const {
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
        RModifyObjectsOperation* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RModifyObjectsOperation*> basecasters_RModifyObjectsOperation;

      public:
        static void registerBasecaster_RModifyObjectsOperation(RJSBasecaster_RModifyObjectsOperation* bc) {
          basecasters_RModifyObjectsOperation.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RModifyObjectsOperation_Wrapper*)

    Q_DECLARE_INTERFACE(RModifyObjectsOperation_Wrapper, "org.qcad.RModifyObjectsOperation_Wrapper")

  
  #endif
  
