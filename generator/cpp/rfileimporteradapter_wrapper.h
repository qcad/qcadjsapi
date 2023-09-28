
  // Auto generated
  
    #ifndef RFILEIMPORTERADAPTER_H_WRAPPER
    #define RFILEIMPORTERADAPTER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
        #include "RDocument.h"
      
        #include "RMessageHandler.h"
      
        #include "RProgressHandler.h"
      
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RFileImporterAdapter.h"
      
      // wrapped object is RFileImporterAdapter_Base class if new object is created: 
      #include "rfileimporteradapter_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RFileImporterAdapter
    class RFileImporterAdapter_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RFileImporterAdapter_Wrapper(const RFileImporterAdapter_Wrapper&);

    public:
      // initialization of RFileImporterAdapter:
      static void init(RJSApi& handler);

      
        static RFileImporterAdapter* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RFileImporterAdapter:
          for (int i=0; i<basecasters_RFileImporterAdapter.length(); i++) {
            RJSBasecaster_RFileImporterAdapter* basecaster = basecasters_RFileImporterAdapter[i];
            RFileImporterAdapter* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RFileImporterAdapter:
          if (t==RJSType_RFileImporterAdapter::getIdStatic()) {
            return (RFileImporterAdapter*)vp;
          }

          qWarning() << "RFileImporterAdapter_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RFileImporterAdapter* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RFileImporterAdapter*: wrapper wraps NULL";
          }

          RFileImporterAdapter* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RFileImporterAdapter*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RFileImporterAdapter_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RFileImporterAdapter_Wrapper(RJSApi& h, RFileImporterAdapter* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~RFileImporterAdapter_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RFileImporterAdapter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RFileImporterAdapter_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: RFileImporterAdapter
    // Function: startImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startImport
              (

                
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: endImport
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endImport
              (

                
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: importObjectP
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  importObjectP
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: importObject
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  importObject
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: setCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentBlockId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: getCurrentBlockId
    // Source: RImporter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getCurrentBlockId
              (

                
              )
              
              ;
            
    // Class: RFileImporterAdapter
    // Function: getDocument
    // Source: RImporter
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
            
    // Class: RFileImporterAdapter
    // Function: setDocument
    // Source: RImporter
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
            
    // Class: RFileImporterAdapter
    // Function: setKnownVariable
    // Source: RImporter
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKnownVariable
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
            
    // Class: RFileImporterAdapter
    // Function: importFile
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      importFileSuper
                    
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
          return RJSType_RFileImporterAdapter::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        RFileImporterAdapter* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        RFileImporterAdapter* getWrapped() const {
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

        
          // get wrapped base object or nullptr:
          RFileImporterAdapter_Base* getWrappedBase() {
            RFileImporterAdapter* w = getWrapped();
            return dynamic_cast<RFileImporterAdapter_Base*>(w);
          }

          RFileImporterAdapter_Base* getWrappedBase() const {
            RFileImporterAdapter* w = getWrapped();
            return dynamic_cast<RFileImporterAdapter_Base*>(w);
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

        
          //void setRecFlag(bool on) const {
          //  RFileImporterAdapter_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        RFileImporterAdapter* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RFileImporterAdapter*> basecasters_RFileImporterAdapter;

      public:
        static void registerBasecaster_RFileImporterAdapter(RJSBasecaster_RFileImporterAdapter* bc) {
          basecasters_RFileImporterAdapter.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RFileImporterAdapter_Wrapper*)

    Q_DECLARE_INTERFACE(RFileImporterAdapter_Wrapper, "org.qcad.RFileImporterAdapter_Wrapper")

  
  #endif
  
