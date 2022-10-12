from django.db import models
import cv2
import matplotlib.pyplot as plt
import base64

# Create your models here.

class NLPUrdu(models.Model):
    image = models.ImageField( upload_to ='image', blank=True, null=True )
    Grayscaleimage = models.ImageField( upload_to ='grayscale_image', blank=True, null=True )
    Grayimage= models.TextField( blank=True, null=True)
    Text= models.TextField( blank=True, null=True)


    def __str__(self):
        return str(self.id)

    def save(self, *args, **kwargs):
        print(self.image)
        #strimage=str(self.image)
        strimg = plt.imread(self.image)
        #img=cv2.imread(strimg) #second method
        #img=cv2.resize(strimg,(300,300))
        #conversion of image from BGR to grayscale
        gray=cv2.cvtColor(strimg,cv2.COLOR_BGR2GRAY)
        ret, frame_buff = cv2.imencode('.jpeg', gray) #could be png, update html as well
            
        frame_b64 = base64.b64encode(frame_buff)
        out=frame_b64.decode('utf-8')
        print(out)
        out1 = str('data:image/png;base64,'+out)
        self.Grayimage=out1
        #gray1=cv2.imwrite('Grayscale image of Tree.jpg', gray)
        # obj = NLPUrdu.objects.create(   
        #     Grayscaleimage = gray1
        #     ) 
        # obj.save() 
        #first show this image using imshow method
        #cv2.imshow("original image",strimg) #this will show the original image
        #cv2.imshow("grayscale image",gray) #this will show a grayscale image
        #cv2.waitKey(0)

        return super().save(*args, **kwargs)
