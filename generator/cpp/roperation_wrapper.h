
  // Auto generated
  
    #ifndef ROPERATION_H_WRAPPER
    #define ROPERATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RExporter.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "ROperation.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for ROperation
    class ROperation_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      ROperation_Wrapper(const ROperation_Wrapper&);

    public:
      // initialization of ROperation:
      static void init(RJSApi& handler);

      
        static ROperation* castToBase(void* vp, /*RJSType ID*/ int t) {
          
          // check if pointer points to derrived type:
          
            if (t==RJSType_RAddObjectOperation::getIdStatic()) {
              return (ROperation*)(RAddObjectOperation*)vp;
            }
            
            if (t==RJSType_RAddObjectsOperation::getIdStatic()) {
              return (ROperation*)(RAddObjectsOperation*)vp;
            }
            
            if (t==RJSType_RChangePropertyOperation::getIdStatic()) {
              return (ROperation*)(RChangePropertyOperation*)vp;
            }
            
            if (t==RJSType_RClickReferencePointOperation::getIdStatic()) {
              return (ROperation*)(RClickReferencePointOperation*)vp;
            }
            
            if (t==RJSType_RClipboardOperation::getIdStatic()) {
              return (ROperation*)(RClipboardOperation*)vp;
            }
            
            if (t==RJSType_RCopyOperation::getIdStatic()) {
              return (ROperation*)(RCopyOperation*)vp;
            }
            
            if (t==RJSType_RDeleteAllEntitiesOperation::getIdStatic()) {
              return (ROperation*)(RDeleteAllEntitiesOperation*)vp;
            }
            
            if (t==RJSType_RDeleteObjectOperation::getIdStatic()) {
              return (ROperation*)(RDeleteObjectOperation*)vp;
            }
            
            if (t==RJSType_RDeleteObjectsOperation::getIdStatic()) {
              return (ROperation*)(RDeleteObjectsOperation*)vp;
            }
            
            if (t==RJSType_RDeleteSelectionOperation::getIdStatic()) {
              return (ROperation*)(RDeleteSelectionOperation*)vp;
            }
            
            if (t==RJSType_RMixedOperation::getIdStatic()) {
              return (ROperation*)(RMixedOperation*)vp;
            }
            
            if (t==RJSType_RModifyObjectOperation::getIdStatic()) {
              return (ROperation*)(RModifyObjectOperation*)vp;
            }
            
            if (t==RJSType_RModifyObjectsOperation::getIdStatic()) {
              return (ROperation*)(RModifyObjectsOperation*)vp;
            }
            
            if (t==RJSType_RMoveReferencePointOperation::getIdStatic()) {
              return (ROperation*)(RMoveReferencePointOperation*)vp;
            }
            
            if (t==RJSType_RMoveSelectionOperation::getIdStatic()) {
              return (ROperation*)(RMoveSelectionOperation*)vp;
            }
            
            if (t==RJSType_RPasteOperation::getIdStatic()) {
              return (ROperation*)(RPasteOperation*)vp;
            }
            
            if (t==RJSType_RScaleSelectionOperation::getIdStatic()) {
              return (ROperation*)(RScaleSelectionOperation*)vp;
            }
            

          // pointer to desired type:
          if (t==RJSType_ROperation::getIdStatic()) {
            return (ROperation*)vp;
          }

          return nullptr;
          
        }

        static ROperation* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_ROperation*: wrapper wraps NULL";
          }

          ROperation* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "ROperation*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          ROperation_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            ROperation_Wrapper(RJSApi& h, ROperation* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~ROperation_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: ROperation
    // Function: apply
    // Source: 
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
            
    // Class: ROperation
    // Function: getEntityTypeFilter
    // Source: 
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
            
    // Class: ROperation
    // Function: setRecordAffectedObjects
    // Source: 
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
            
    // Class: ROperation
    // Function: setSpatialIndexDisabled
    // Source: 
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
            
    // Class: ROperation
    // Function: setAllowInvisible
    // Source: 
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
            
    // Class: ROperation
    // Function: setAllowAll
    // Source: 
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
            
    // Class: ROperation
    // Function: setKeepChildren
    // Source: 
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
            
    // Class: ROperation
    // Function: setTransactionGroup
    // Source: 
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
            
    // Class: ROperation
    // Function: getTransactionGroup
    // Source: 
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
            
    // Class: ROperation
    // Function: setText
    // Source: 
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
            
    // Class: ROperation
    // Function: getText
    // Source: 
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
            
    // Class: ROperation
    // Function: getTransactionTypes
    // Source: 
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
            
    // Class: ROperation
    // Function: setTransactionType
    // Source: 
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
            
    // Class: ROperation
    // Function: getTransactionType
    // Source: 
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
          return RJSType_ROperation::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        ROperation* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        ROperation* getWrapped() const {
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
        ROperation* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(ROperation_Wrapper*)

    Q_DECLARE_INTERFACE(ROperation_Wrapper, "org.qcad.ROperation_Wrapper")

  
  #endif
  