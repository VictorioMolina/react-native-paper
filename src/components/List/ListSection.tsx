import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import ListSubheader from './ListSubheader';
import { withTheme } from '../../core/theming';
import type { Theme } from '../../types';

type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Title text for the section.
   */
  title?: string;
  /**
   * Content of the section.
   */
  children: React.ReactNode;
  /**
   * @optional
   */
  theme: Theme;
  /**
   * Style that is passed to Title element.
   */
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

/**
 * A component used to group list items.
 *
 * <div class="screenshots">
 *   <img src="screenshots/list-section.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Section>
 *     <List.Subheader>Some title</List.Subheader>
 *     <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
 *     <List.Item
 *       title="Second Item"
 *       left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
 *     />
 *   </List.Section>
 * );
 *
 * export default MyComponent;
 * ```
 */
const ListSection = ({
  children,
  title,
  titleStyle,
  style,
  ...rest
}: Props) => (
  <View {...rest} style={[styles.container, style]}>
    {title ? <ListSubheader style={titleStyle}>{title}</ListSubheader> : null}
    {children}
  </View>
);

ListSection.displayName = 'List.Section';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default withTheme(ListSection);
