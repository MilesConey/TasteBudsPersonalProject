package rocks.zipcode.tastebuds.personalproject;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import rocks.zipcode.tastebuds.personalproject.TasteBudsPersonalProjectApp;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = TasteBudsPersonalProjectApp.class)
public @interface IntegrationTest {
}
