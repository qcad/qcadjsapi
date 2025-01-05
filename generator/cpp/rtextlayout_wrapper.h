
  // Auto generated
  
    #ifndef RTEXTLAYOUT_H_WRAPPER
    #define RTEXTLAYOUT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "RJSHelper.h"
        #include "../RJSHelper_qcad.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType_qcad.h"
      
        #include "RTextLayout.h"
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for RTextLayout
    class QCADJSAPI_EXPORT 
     RTextLayout_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      RTextLayout_Wrapper(const RTextLayout_Wrapper&);

    public:
      // initialization of RTextLayout:
      static void init(RJSApi& handler);

      
        static RTextLayout* castToBase(void* vp, /*RJSType ID*/ int t) {
          

          // hook for modules to cast from other types to base RTextLayout:
          for (int i=0; i<basecasters_RTextLayout.length(); i++) {
            RJSBasecaster_RTextLayout* basecaster = basecasters_RTextLayout[i];
            RTextLayout* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class RTextLayout:
          if (t==RJSType_RTextLayout::getIdStatic()) {
            return (RTextLayout*)vp;
          }

          qWarning() << "RTextLayout_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static RTextLayout* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_RTextLayout*: wrapper wraps NULL";
          }

          RTextLayout* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "RTextLayout*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          RTextLayout_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            RTextLayout_Wrapper(RJSApi& h, RTextLayout* o, bool wrappedCreated);
          
        // special constructor to wrap existing object from shared pointer:
        
            //Q_INVOKABLE 
            RTextLayout_Wrapper(RJSApi& h, QSharedPointer<RTextLayout> o);
          

      // destructor:
      
          virtual ~RTextLayout_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: RTextLayout
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              RTextLayout_Wrapper
                
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
    
    // Class: RTextLayout
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: isTTF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTTF
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: hasPainterPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPainterPath
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: getLayout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getLayout
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: getTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getTransform
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: getColor
    // Source: 
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
            
    // Class: RTextLayout
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
            
    // Class: RTextLayout
    // Function: getFont
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getFont
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: isBold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBold
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: isItalic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isItalic
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: isUnderline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUnderline
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: getHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: RTextLayout
    // Function: getBoundingBox
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  getBoundingBox
              (

                
              )
              
                const
              
              ;
            
          /*
          // get wrapped object as clone:
          // used to create a QSharedPointer on the fly when needed for conversion:
          public:
           RTextLayout* getWrappedClone() {
            RTextLayout* w = getWrapped();
            if (w==nullptr) {
              qWarning() << "RTextLayout::getWrappedClone: wrapped is NULL";
              handler.trace();
              return nullptr;
            }
            // return cloned object:
            return new RTextLayout(*w);
          }
          */
        
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
              if (!spWrapped.isNull()) {
                spWrapped = nullptr;
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
          return RJSType_RTextLayout::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        RTextLayout* getWrapped() {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        RTextLayout* getWrapped() const {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (!spWrapped.isNull()) {
              return spWrapped.data();
            }
          
          return nullptr;
        }

        
        // get wrapped object as QSharedPointer:
        virtual QSharedPointer<RTextLayout> getWrappedSp() {
          if (!spWrapped.isNull()) {
            return spWrapped;
          }
          //if (wrapped!=nullptr) {
          //  qWarning() << "wrapper does not wrap a QSharedPointer<RTextLayout> but a regular pointer";
          //  return QSharedPointer<RTextLayout>();
          //}
          return QSharedPointer<RTextLayout>();
        }

        bool hasWrappedSp() const {
          return !spWrapped.isNull() && spWrapped.data()!=nullptr;
        }
        

        bool hasWrapped() const {
          
            return (!spWrapped.isNull() && spWrapped.data()!=nullptr);
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          
            if (!spWrapped.isNull() && spWrapped.data()!=nullptr) {
              return (unsigned long long int)spWrapped.data();
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:

        
          // wrapped object as shared pointer:
          QSharedPointer<RTextLayout> spWrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_RTextLayout*> basecasters_RTextLayout;

      public:
        static void registerBasecaster_RTextLayout(RJSBasecaster_RTextLayout* bc) {
          basecasters_RTextLayout.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(RTextLayout_Wrapper*)

    Q_DECLARE_INTERFACE(RTextLayout_Wrapper, "org.qcad.RTextLayout_Wrapper")

  
  #endif
  
